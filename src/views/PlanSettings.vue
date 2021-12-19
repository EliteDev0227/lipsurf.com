<template>
  <BaseLayout>
    <v-container>
      <Notice :type="noticeType" :show.sync="showNotice"
        ><span v-html="noticeMsg"></span
      ></Notice>
      <h1>Plan Settings</h1>
      <Loading v-if="loading" size="85px" />
      <template v-else-if="dontShowPage">
        <h2>Error 😥</h2>
      </template>
      <!-- v-show is more performant? -->
      <div v-show="!dontShowPage && !loading">
        <div style="max-width: 800px; margin: 0 auto">
          <v-alert v-if="paymentProblem" color="var(--red-color)" type="error">
            <span
              style="display: flex; flex-direction: row; justify-content: space-between"
              id="test_paymentFailedBox"
            >
              <span>
                <IconBase class="icon" name="error">
                  <img svg-inline src="@lipsurf/common/assets/icons/error.svg"/>
                </IconBase>
                <span v-html="msg"></span>
                Your last payment failed. Please add a new card.
              </span>
              <v-btn @click="addCard" outlined="true">Add New Card</v-btn>
            </span>
          </v-alert>
          <v-row>
            <v-col cols="3">
              User
            </v-col>
            <v-col>
              <strong>{{ email }}</strong>
              <div class="btn-bar">
                <v-btn color="accent" @click="signOut">Sign Out</v-btn>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              Plan
            </v-col>
            <v-col>
              <div v-if="cancelAt">
                Your last day of <strong>{{ curNicePlan }}</strong> will be on
                <strong>{{ cancelAt }}</strong
                >.
                <br />
                Your subscription will not renew.
              </div>
              <div v-else-if="endedAt">
                Your subscription has ended.
                <br />
                (Last day of <strong>{{ lastPaidNicePlan }}</strong> was on
                <strong>{{ endedAt }}</strong
                >).
              </div>
              <div v-else>
                You're on <strong>{{ curNicePlan }}</strong
                >.
              </div>
            </v-col>
          </v-row>
          <v-row v-if="renewAt || cancelAt || endedAt">
            <v-col cols="3">
              Next bill
            </v-col>
            <v-col v-if="renewAt">
              We'll bill you <strong>${{ cost }}</strong> for another
              {{ term === "yearly" ? "year" : "month" }} on
              <strong>{{ renewAt }}</strong
              >.
              <div class="btn-bar">
                <!-- <v-btn color="accent">Change Plan Length</v-btn> -->
              </div>
            </v-col>
            <v-col v-else>
              None
            </v-col>
          </v-row>
          <v-row v-if="cards.length > 0">
            <v-col cols="3">
              Payment method
            </v-col>
            <v-col>
              <div class="right-btn-bar">
                <v-btn
                  color="accent"
                  @click="addCard"
                  v-if="curPlan !== FREE_PLAN"
                  >Add New Card</v-btn
                >
              </div>
              <v-simple-table v-if="cards.length">
                <template v-slot:default>
                  <thead>
                    <th>Default</th>
                    <th>Card</th>
                    <th>Expiration Date</th>
                  </thead>
                  <tbody>
                    <tr v-for="card in cards" :key="card.id">
                      <td class="default-cell">
                        <span class="tag fullsize default" v-if="card.default"
                          >Default</span
                        >
                        <template v-else>
                          <v-btn
                            color="accent"
                            @click="() => makeDefault(card.id)"
                            >Make Default</v-btn
                          >
                        </template>
                      </td>
                      <td>
                        <span
                          >{{ card.brand }} ending in {{ card.lastFour }}</span
                        >
                      </td>
                      <td>
                        <span>{{ card.exp }}</span>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              Change Plan
            </v-col>
            <v-col></v-col>
          </v-row>
          <v-row>
            <v-row>
              <v-col>
                <PricingFeatures :yearly-toggled-on.sync="yearlyToggledOn">
                  <template v-slot:free>
                    <v-btn
                      v-if="!freeBtn.disabled"
                      class="medium-btn"
                      large
                      color="accent"
                      @click="changePlan(FREE_PLAN)"
                      >{{ freeBtn.label }}</v-btn
                    >
                  </template>
                  <template v-slot:plus>
                    <v-btn
                      :disabled="plusBtn.disabled"
                      class="medium-btn"
                      large
                      color="accent"
                      @click="changePlan(PLUS_PLAN)"
                      >{{ plusBtn.label }}</v-btn
                    >
                  </template>
                  <template v-slot:premium>
                    <v-btn
                      :disabled="premiumBtn.disabled"
                      class="medium-btn"
                      large
                      color="accent"
                      @click="changePlan(PREMIUM_PLAN)"
                      >{{ premiumBtn.label }}</v-btn
                    >
                  </template>
                  <template v-slot:wake-word>
                    <a href="#wakeWordDetails" @click="faqExpansion = 1"
                      >Wake-word</a
                    >
                  </template>
                </PricingFeatures>
              </v-col>
            </v-row>
            <PricingFaqs :faq-expansion="faqExpansion" />
          </v-row>
        </div>
      </div>
    </v-container>
  </BaseLayout>
</template>

<style scoped>
.right-btn-bar {
  margin-bottom: 0.5em;
  text-align: right;
}
.default-cell {
  text-align: center;
}
.row .col:first-child {
  color: var(--dark-mute-color);
}
</style>

<style>
.theme--light.v-data-table {
  background: var(--off-white);
}
</style>

<script lang="ts" setup>
import BaseLayout from "./BaseLayout.vue";
import { Loading, Notice } from "@lipsurf/common/components";
import PricingFaqs from "../components/PricingFaqs.vue";
import PricingFeatures from "../components/PricingFeatures.vue";
import {
  API_BASE_URL,
  DEBUG,
  PLAN_TO_NICE,
  FREE_PLAN,
  PLUS_PLAN,
  PREMIUM_PLAN,
} from "@lipsurf/common/constants";
import {
  getPlanSettings,
  instanceOfPlanSettingsSuccessResp,
  createCheckoutSession,
  updatePlanSettings,
  NotFoundError,
  addCardUsingCheckoutSession,
} from "@lipsurf/common/api";
import { getStripe } from "../stripe";
import format from "date-fns/format";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

interface Card {
  lastFour: string;
  type: string;
}

const DATE_FMT = "iiii, LLLL d, y";
const router = useRouter();
const route = useRoute();

const noticeType = ref<NotificationType>("error");
const noticeMsg = ref<string|null>("");
const showNotice = ref(false);

const paymentProblem = ref(false);

const yearlyToggledOn = ref(true);
const faqExpansion = ref(-1);

const cards = ref<(CardSummarized | {})[]>([]);
const lastPaidNicePlan = ref("");
const curNicePlan = ref("");
const cost = ref("");

const status = ref<API.PlanSettingsSuccess["status"] | null>(null);
const renewAt = ref<string | null>(null);
const curPlan = ref<plan | null>(null);
const cancelAt = ref<string | null>(null);
const endedAt = ref<string | null>(null);
const term = ref<Term | null>(null);
const cancelFuture = ref(false);

const loading = ref(true);
// if there was an error getting sub info
const dontShowPage = ref(false);

const email = ref("");

let successMsg = route.query.success as string | null;
if (successMsg) toast(false, successMsg);

let errorMsg = route.query.error as string | null;
if (errorMsg) toast(true, errorMsg, false);

const checkoutSessionId = route.query.checkoutSessionId as
  | string
  | null;

const addingCard = !!route.query.addingCard;

const waitingForAuth = window.setTimeout(() => {
  noUser();
}, 5000);

window.firebaseApp.auth().onAuthStateChanged(async user => {
  clearTimeout(waitingForAuth);
  if (!user) {
    noUser();
  } else {
    email.value = user.email!;
    const firebaseIdToken = await user!.getIdToken();
    if (addingCard) {
      let resp: API.AddNewCardResp;
      let query = { ...route.query };
      delete query.addingCard;
      delete query.checkoutSessionId;
      router.replace({ query });

      try {
        // just gather plan deets
        resp = await addCardUsingCheckoutSession(
          firebaseIdToken,
          checkoutSessionId!
        );
        toast(false, "Successfully added new card.");
      } catch (e: any) {
        toast(true, e.message, false);
        return;
      } finally {
        loading.value = false;
      }

      populate(resp);
    } else {
      let resp: API.PlanSettingsResp;

      try {
        // just gather plan deets
        resp = await getPlanSettings(firebaseIdToken);
      } catch (e: any) {
        if (e instanceof NotFoundError) {
          resp = {
            plan: FREE_PLAN,
            costInCents: 0,
          };
        } else {
          toast(true, e.message);
          return;
        }
      } finally {
        loading.value = false;
      }

      populate(resp as API.PlanSettingsSuccess);
    }
  }
});

function getBtnProps(plan: plan) {
  console.log("recalcing get btn props");
  if (curPlan.value === null) {
    return { label: "Upgrade", disabled: true };
  } else {
    if (cancelAt.value) {
      if (plan === FREE_PLAN) {
        return { label: "Already Downgraded", disabled: true };
      } else if (
        curPlan.value === plan &&
        ((term.value === "monthly" && !yearlyToggledOn.value) ||
          (term.value === "yearly" && yearlyToggledOn.value))
      ) {
        return { label: "Reinstate", disabled: false };
      } else {
        return { label: "Upgrade", disabled: false };
      }
    } else {
      if (curPlan.value === plan) {
        if (yearlyToggledOn.value && term.value === "monthly") {
          return { label: "Go Yearly", disabled: false };
        } else if (!yearlyToggledOn.value && term.value === "yearly") {
          return { label: "Go Monthly", disabled: false };
        } else {
          return { label: "Your Plan", disabled: true };
        }
      } else {
        if (plan > curPlan.value || cancelAt.value) {
          return { label: "Upgrade", disabled: false };
        } else {
          return { label: "Downgrade", disabled: false };
        }
      }
    }
  }
}

async function createCheckout(plan?: plan, term?: Term) {
  loading.value = true;
  showNotice.value = false;
  const user = window.firebaseApp.auth().currentUser;
  const firebaseIdToken = await user!.getIdToken();
  try {
    const sessionId = await createCheckoutSession(
      firebaseIdToken,
      true,
      plan,
      term
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
      toast(true, result.error.message);
    }
  } catch (e: any) {
    toast(true, e.message, false);
  }
}

// TODO: display an error message
function noUser() {
  console.log("Seems like there's no user");
  router.push({ name: "login" });
}

function toast(error: boolean, msg: string, _dontShowPage = true) {
  showNotice.value = true;
  noticeType.value = error ? "error" : "success";
  noticeMsg.value = msg;
  loading.value = false;
  dontShowPage.value = error && _dontShowPage;
}

function populate(resp: API.PlanSettingsSuccess) {
  if ("status" in resp) {
    cards.value = resp.cards;
    term.value = resp.term;
    status.value = resp.status;
    endedAt.value = resp.endedAt
      ? format(resp.endedAt * 1000, DATE_FMT)
      : null;
    renewAt.value = resp.renewAt
      ? format(resp.renewAt * 1000, DATE_FMT)
      : null;
    cancelAt.value = resp.cancelAt
      ? format(resp.cancelAt * 1000, DATE_FMT)
      : null;

    if (
      ["incomplete", "incomplete_expired", "past_due", "unpaid"].includes(
        resp.status
      )
    )
      paymentProblem.value = true;
  }

  lastPaidNicePlan.value = PLAN_TO_NICE[resp.plan];
  curPlan.value = "endedAt" in resp && resp.endedAt ? FREE_PLAN : resp.plan;
  curNicePlan.value = PLAN_TO_NICE[curPlan.value];
  cost.value = (resp.costInCents / 100).toFixed(0);
}

function freeBtn() {
  return getBtnProps(FREE_PLAN);
}

function plusBtn() {
  return getBtnProps(PLUS_PLAN);
}

function premiumBtn() {
  return getBtnProps(PREMIUM_PLAN);
}

function addCard() {
  return createCheckout();
}

function signOut() {
  return window.firebaseApp.auth().signOut();
}

async function makeDefault(paymentMethodId: string) {
  const user = window.firebaseApp.auth().currentUser;
  const firebaseIdToken = await user!.getIdToken();
  try {
    // update card
    loading.value = true;
    const resp = await updatePlanSettings(firebaseIdToken, {
      paymentMethodId,
    });
    cards.value = resp.cards;
    toast(false, "Successfully changed default payment method.");
  } catch (e:any) {
    toast(true, e.message);
  } finally {
    loading.value = false;
  }
}

/**
 * @param plan the new plan
 * @param term the new term
 */
async function changePlan(plan: plan) {
  const term = yearlyToggledOn.value ? "yearly" : "monthly";
  const user = window.firebaseApp.auth().currentUser;
  const firebaseIdToken = await user!.getIdToken();

  // unpaid is basically the same as canceled. Our stripe settings make it
  // so subscriptions will be canceled if they're unpaid so unlikely we'll see
  // an unpaid status
  if (cards.value.length === 0) {
    await createCheckout(plan, term);
  } else {
    try {
      // update subscription
      loading.value = true;
      const resp = await updatePlanSettings(firebaseIdToken, {
        plan,
        term,
      });
      populate(resp);
      toast(false, "Successfully changed subscription.");
    } catch (e: any) {
      toast(true, e.message);
    } finally {
      loading.value = false;
    }
  }
}

</script>
