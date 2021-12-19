<template>
  <BaseLayout>
    <div style="margin: 60px auto; max-width: 600px">
      <div style="text-align: center">
        <SuccessCheck />
        <h1>Upgrade Successful!</h1>
      </div>
      <h2><em>Woah.</em> Is it me or did the ground just shake?</h2>
      <p class="big">
        You've just unleashed some serious power by upgrading to
        <strong
          >LipSurf
          <f-lbl
            fullsize
            :premium="plan == PREMIUM_PLAN"
            :plus="plan == PLUS_PLAN" /></strong
        >&nbsp;.
      </p>
      <section>
        <h3>How to Sign-In</h3>
        <ol>
          <li>
            Go to the LipSurf options by right-clicking the extension icon then
            "Options".
          </li>
          <li>Under "Subscription" click "Sign in".</li>
          <li>
            Use the same email ({{ email }}) that you entered before during
            checkout.
          </li>
        </ol>
      </section>
      <section>
        <h3>Billing</h3>
        <p>
          You will be billed <strong>{{ billing }}</strong> automatically at
          {{ term }} intervals.
        </p>
        <p>
          You may change your subscription at any time by going into the LipSurf
          options and clicking "Change Subscription" or
          <router-link :to="{ name: 'contact' }">contacting us</router-link>.
        </p>
      </section>
    </div>
  </BaseLayout>
</template>

<style scoped>
.big {
  font-size: 20pt;
}

section {
  margin: 40px 0;
}
ol {
  font-size: 16pt;
}
ol li {
  margin: 20px;
}
</style>

<script lang="ts">
import { PLUS_PLAN, PREMIUM_PLAN } from "@lipsurf/common/constants";
import SuccessCheck from "../components/SuccessCheck.vue";
import BaseLayout from "./BaseLayout.vue";
import FLbl from "../components/FLbl.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  components: {
    BaseLayout,
    FLbl,
    SuccessCheck,
  },

  setup() {
    let recCharge: string;
    const route = useRoute();
    const user = window.firebaseApp.auth().currentUser!;

    const term = <Term>route.query.term;
    const plan = <plan>+(route.query.plan || 0);

    const email = ref(user.email);

    if (plan === PREMIUM_PLAN) {
      recCharge = term === "yearly" ? "72.00" : "8.00";
    } else {
      recCharge = term === "yearly" ? "36.00" : "4.00";
    }

    const billing = `$${recCharge} ${
      term === "yearly" ? "per year" : "per month"
    }`;

    return {
      PLUS_PLAN: PLUS_PLAN,
      PREMIUM_PLAN: PREMIUM_PLAN,
      billing,
      email,
      term,
      plan,
    }
  },
};
</script>
