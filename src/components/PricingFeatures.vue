<template>
  <div>
    <div class="top-bar">
      <span class="toggle-label">bill monthly</span>
      <!-- id is for tests -->
      <toggle-button
        style="font-size: 11pt; font-weight:bold;"
        :value="yearlyToggledOn"
        color="var(--primary-color)"
        :sync="true"
        @change="termToggle"
        :width="65"
        :height="30"
        id="monthlyYearlySwitch"
        :labels="false"
      />
      <span class="toggle-label">bill yearly</span>
    </div>
    <div class="pricing">
      <div class="option free">
        <div>
          <h2>FREE</h2>
          <div class="price"><span class="dollar-sign">$</span>0</div>
          <ul>
            <li>
              <IconBase name="checkmark">
                <CheckIcon /> </IconBase
              >Over 100 commands
            </li>
            <li>
              <IconBase name="checkmark">
                <CheckIcon /> </IconBase
              >Community plugins
            </li>
          </ul>
        </div>
        <div class="btn-bar get-it-bar">
          <slot name="free"> </slot>
        </div>
      </div>
      <div class="option plus">
        <div>
          <h2>PLUS</h2>
          <div class="price">
            <span class="dollar-sign">$</span>
            <div style="display: inline-flex;">
              <div :class="{ striked: coupon && coupon.valid }">
                {{ plusPlanPrice }}
              </div>
            </div>
            <span class="monthly">/month</span>
          </div>
          <ul>
            <li>
              <IconBase name="checkmark">
                <CheckIcon /> </IconBase
              >WaniKani reviews
            </li>
            <li>
              <IconBase name="checkmark">
                <CheckIcon /> </IconBase
              >Duolingo
            </li>
            <li>
              <IconBase name="checkmark">
                <CheckIcon /> </IconBase
              >Email and phone support
            </li>
          </ul>
          <div class="btn-bar get-it-bar">
            <slot name="plus"> </slot>
          </div>
        </div>
      </div>
      <div class="option premium">
        <div>
          <h2>PREMIUM</h2>
          <div class="price">
            <span class="dollar-sign">$</span>
            <div style="display: inline-flex;">
              <div :class="{ striked: coupon && coupon.valid }">
                {{ premiumPlanPrice }}
              </div>
            </div>
            <span class="monthly">/month</span>
          </div>
          <ul>
            <li>
              <IconBase name="checkmark">
                <CheckIcon /> </IconBase
              >All features in PLUS
            </li>
            <li>
              <IconBase name="checkmark">
                <CheckIcon /> </IconBase
              >Dictate text
            </li>
            <li>
              <IconBase name="checkmark">
                <CheckIcon /> </IconBase
              >Go to custom URLs
            </li>
            <li>
              <IconBase name="checkmark">
                <CheckIcon />
              </IconBase>
              <slot name="wake-word">Wake-word</slot>
            </li>
          </ul>
        </div>
        <div class="btn-bar get-it-bar">
          <slot name="premium"> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.striked {
  text-decoration: line-through;
}
/* .coming-soon {
    background-color: #b0d3d6;
    color: var(--dark-mute-color);
    padding: 3px 7px;
    border-radius: 5px;
    font-size: 13pt;
    text-transform: uppercase;
    font-weight: 500;
    white-space: nowrap;
} */
.get-it-bar .v-btn__content {
  text-transform: uppercase;
  font-weight: 800;
}
</style>

<style scoped>
.top-bar {
  margin: 30px auto;
  text-align: center;
}
.toggle-label {
  margin: 0px 11px;
}
.pricing li {
  list-style: none;
  margin: 10px;
}

.dollar-sign {
  font-size: 20pt;
  position: relative;
  bottom: 7px;
}
.monthly {
  font-size: 12pt;
  color: #666;
}
.get-it-bar {
  margin: 2em;
}
.pricing {
  display: flex;
  text-align: center;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  margin: 0 20px;
}
.pricing .option {
  border-radius: 5px;
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
}

.option h2 {
  border-bottom: 1px solid #48484821;
  padding: 20px 0;
  margin: 0;
}

.option.free {
  background-color: var(--seashell-color);
  color: var(--dark-text-color);
}
.option.pro {
  background-color: var(--indigo-color);
  color: var(--mute-color);
  border-radius: 5px 0 0 5px;
}
.option.plus {
  background: var(--plus-light-color);
  color: #335c3d;
}
.option.premium {
  background: var(--premium-light-color);
  color: #5c5333;
}
.option.plus h2 {
  background: #cbeccb;
}
.option.premium h2 {
  background: var(--premium-color);
}
.option.free h2 {
  background: var(--dark-seashell-color);
}
.option.pro h2 {
  background: var(--light-indigo-color);
}
.price {
  position: relative;
  font-size: 40pt;
  margin: 50px 0;
}
.pricing .option ul {
  text-align: left;
}
.pricing .option ul {
  font-size: 18pt;
}
.pricing .icon {
  margin-right: 0.8em;
}
@media (max-width: 845px) {
  .pricing {
    flex-direction: column;
  }

  .pricing .option {
    width: 100%;
    flex: 0 1 auto !important;
  }
}
</style>

<script lang="ts">
import { PREMIUM_PLAN, FREE_PLAN, PLUS_PLAN } from "@lipsurf/common/constants";
import { IconBase } from "@lipsurf/common/components";
import { PLAN_TO_PRICE } from "../constants";
import CheckIcon from "@lipsurf/common/assets/icons/check.svg?inline";
// import ToggleButton from "vue-js-toggle-button";
import { ref } from "vue";

// Vue.use(ToggleButton);

interface IProps {
  yearlyToggledOn: boolean;
  coupon: FrontendCoupon;
}

export default {
  components: {
    IconBase,
    CheckIcon,
  },

  props: {
    yearlyToggledOn: { default: true },
    coupon: {},
  },

  setup(props: IProps, {emit}) {
    const yearlyToggledOn = ref(props.yearlyToggledOn);
  
    function monthlyPrice(plan: plan, yearly: boolean) {
      let cents: number;
      if (yearly) {
        cents = PLAN_TO_PRICE[plan].yearly / 12;
      } else {
        cents = PLAN_TO_PRICE[plan].monthly;
      }
      return (cents / 100).toFixed(0);
    }

    return {
      yearlyToggledOn,
      get plusPlanPrice() {
        return monthlyPrice(PLUS_PLAN, yearlyToggledOn.value);
      },
      get premiumPlanPrice() {
        return monthlyPrice(PREMIUM_PLAN, yearlyToggledOn.value);
      },
      termToggle(ev: { value: boolean }) {
        emit("update:yearlyToggledOn", ev.value);
      }
    }
  },




}
</script>