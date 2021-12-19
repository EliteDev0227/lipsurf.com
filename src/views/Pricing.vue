<template>
  <BaseLayout>
    <Loading size="85px" v-if="loading" />
    <!-- v-show is theoretically faster -->
    <div v-show="!loading">
      <Notice :type="notice.type" :show.sync="notice.show"
        ><span style="display: flex">
          <Loading v-if="notice.loading" />
          <span v-html="notice.msg"></span> </span
      ></Notice>
      <sign-in-modal
        :show.sync="showSignInModal"
        @signed-in="delegateCheckoutOrDashboard"
      ></sign-in-modal>
      <v-container>
        <v-row row justify-center>
          <v-col xl8>
            <div>
              <div style="position: relative">
                <img
                  class="cat"
                  src="/img/cat-pricing.png"
                  alt="cat scratching the pricing box"
                />
              </div>
            </div>
            <PricingFeatures
              :yearly-toggled-on.sync="yearlyToggledOn"
              :coupon="coupon"
            >
              <template v-slot:free>
                <InstallBtn primary="Download Now" secondary="" />
              </template>
              <template v-slot:plus>
                <v-btn
                  class="medium-btn"
                  large
                  color="accent"
                  @click="buy(PLUS_PLAN)"
                  >Upgrade</v-btn
                >
              </template>
              <template v-slot:premium>
                <v-btn
                  class="medium-btn"
                  large
                  color="accent"
                  @click="buy(PREMIUM_PLAN)"
                  >Upgrade</v-btn
                >
              </template>
              <template v-slot:wake-word>
                <a href="#wakeWordDetails" @click="faqExpansion = 1"
                  >Wake-word</a
                >
              </template>
            </PricingFeatures>
            <br />
            <p v-if="user === null">
              Already have a subscription?
              <router-link :to="{ name: 'login' }">Sign in</router-link>.
            </p>
            <div v-else>
              <p>
                You are signed in as <b>{{ user.email }}</b
                >.
              </p>
              <div class="btn-bar">
                <v-btn color="accent" :to="{ name: 'settings' }"
                  >Manage Subscription</v-btn
                >
                <v-btn class="medium-btn" color="accent" @click="signOut"
                  >Sign out</v-btn
                >
              </div>
            </div>
          </v-col>
        </v-row>
        <PricingFaqs :faq-expansion="faqExpansion" />
      </v-container>
    </div>
  </BaseLayout>
</template>

<style scoped>
.cat {
  display: block;
  position: absolute;
  right: -257px;
  height: 332px;
  width: 277px;
  top: 270px;
}

@media (max-width: 845px) {
  .cat {
    top: 1300px;
  }
}
</style>

<script lang="ts">
import BaseLayout from "./BaseLayout.vue";
import {
  PLUS_PLAN,
  PREMIUM_PLAN,
  PLAN_TO_NICE,
} from "@lipsurf/common/constants";
import SignInModal from "../components/SignInModal.vue";
import InstallBtn from "../components/InstallBtn.vue";
import { PLAN_TO_PRICE } from "../constants";
import PricingFeatures from "../components/PricingFeatures.vue";
import PricingFaqs from "../components/PricingFaqs.vue";
import { Loading, Notice } from "@lipsurf/common/components";
import {
  instanceOfCreateCheckoutSessionSuccessResp,
  createCheckoutSession,
  getPlanSettings,
  NotFoundError,
  verifyCoupon,
} from "@lipsurf/common/api";
import { getStripe } from "../stripe";
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";

export default {
  components: {
    BaseLayout,
    InstallBtn,
    SignInModal,
    Loading,
    Notice,
    PricingFeatures,
    PricingFaqs,
  },

  setup() {
    const route = useRoute();
    const router = useRouter();

    const loading = ref(false);
    const faqExpansion = ref(-1);
    const showSignInModal = ref(false);
    const yearlyToggledOn = ref(true);
    const selectedPlan = ref<plan|undefined>(undefined);
    const coupon = ref<FrontendCoupon|undefined>(undefined);
    const snackbar = ref(false);
    let user: firebase.User | null = null;
    const notice = ref({
      show: false,
      msg: "",
      type: <NotificationType>"error",
      loading: false,
    });

    onMounted(() => {
      yearlyToggledOn.value = route.query.term === "monthly" ? false : true;

      const error = route.query.error as string | null;
      if (error) {
        notify("error", error);
      }
    });


    window.firebaseApp.auth().onAuthStateChanged(_user => {
      user = _user;
    });

    let couponId: string = <string | null>route.query.couponId || "";
    if (couponId) {
      notice.value.loading = true;
      notify("info", "Verifying coupon...");
      (async () => {
        try {
          const _coupon = (await verifyCoupon(couponId)).data;

          if (_coupon.valid) {
            const basePrice =
              PLAN_TO_PRICE[PREMIUM_PLAN][
                yearlyToggledOn.value ? "yearly" : "monthly"
              ];
            coupon.value = {
              valid: true,
              name: _coupon.name,
              yearlyCents:
                _coupon.amountOff !== null
                  ? basePrice - _coupon.amountOff
                  : (basePrice * (100 - _coupon.percentOff)) / 100,
              yearlyPriceDesc: "$57.60 this year, and $72 for subsequent years",
            };

            couponId = _coupon.id;
            notify(
              "success",
              `Coupon "<strong>${_coupon.name}</strong>" applied 💰! You will see the reduced pricing in the next step (checkout).`
            );
          } else {
            coupon.value = {
              valid: false,
              invalidReason: _coupon.invalidReason,
              id: couponId,
            };
            notify(
              "error",
              `Unfortunately, the coupon code <strong>"${couponId}"</strong> is invalid 🙁`
            );
          }
        } catch (e: any) {
          notify("error", e.message);
        } finally {
          notice.value.loading = false;
        }
      })();
    }

    // todo: make a composition when vue 3 is ready
    // vue 3 - this could be a mixin
    function notify(type: NotificationType, msg: string) {
      notice.value.show = true;
      notice.value.msg = msg;
      notice.value.type = type;
      loading.value = false;
    }

    /**
     *  Called after signing-in. Decide whether to take them to
     *  customer dashboard or straight to stripe checkout
     *  depending on whether they have cards saved.
     */
    async function delegateCheckoutOrDashboard() {
      // this.user is not avail at this point
      const user = window.firebaseApp.auth().currentUser!;
      // if there is no card on file, take them straight to stripe checkout
      // if a card is on file already, take them to the settings page
      // so they can decide whether to add another card or upgrade the plan.
      const userToken = await user.getIdToken();
      try {
        const planSettings = await getPlanSettings(userToken);
        if (planSettings.cards.length)
          return router.push({ name: "settings" });
      } catch (e) {
        if (e instanceof NotFoundError)
          console.error("no sub data found for user");
        else console.error(e);
      }
      loading.value = true;
      await checkout(userToken);
    }

    async function checkout(firebaseIdToken: string) {
      const term = yearlyToggledOn.value ? "yearly" : "monthly";
      notice.value.show = false;
      // TODO:
      // GET /plan/settings
      // if they have an active subscription, change it with POST
      // otherwise continue on with this checkout
      try {
        const sessionId = await createCheckoutSession(
          firebaseIdToken,
          false,
          selectedPlan.value,
          term,
          couponId
        );

        const result = await (await getStripe()).redirectToCheckout({
          // Make the id field from the Checkout Session creation API response
          // available to this file, so you can provide it as parameter here
          // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
          sessionId,
        });
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
        if (result.error.message) {
          notify("error", result.error.message);
        }
      } catch (e: any) {
        notify("error", e);
      }
    }

    return {
      loading,
      yearlyToggledOn,
      showSignInModal,
      faqExpansion,
      notice,
      PLUS_PLAN,
      PREMIUM_PLAN,

      signOut() {
        return window.firebaseApp.auth().signOut();
      },

      notify,
      async buy(plan: plan) {
        selectedPlan.value = plan;
        if (user) {
          delegateCheckoutOrDashboard();
        } else {
          showSignInModal.value = true;
        }
        return;
      },
    }
  },

}
</script>
