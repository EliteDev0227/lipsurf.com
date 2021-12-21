<template>
  <BaseLayout>
    <v-container>
      <v-row row justify-center>
        <v-col xs10 md8 xl6>
          <div v-show="!submitted" style="margin-top: -100px">
            <h2 class="uninstalled-title light">
              LipSurf has been uninstalled.
            </h2>
            <div class="form-cont">
              <div class="inner-form">
                <div class="left-title">
                  <h2>Where, oh where did I go wrong?</h2>
                  <h3 class="font-weight-regular">
                    What didn't you like about LipSurf?
                  </h3>
                </div>
                <div>
                  <v-checkbox
                    v-model="formData.checkedSite"
                    label="Doesn't work well with a certain site"
                  ></v-checkbox>
                  <div class="sub-q" v-show="formData.checkedSite">
                    <v-text-field
                      v-model="formData.site"
                      label="Which site(s) ?  (eg. nytimes.com, vimeo.com, etc.)"
                    ></v-text-field>
                  </div>
                  <v-checkbox
                    v-model="formData.checkedBroken"
                    label="Seems broken"
                  ></v-checkbox>
                  <div class="sub-q" v-show="formData.checkedBroken">
                    <v-text-field
                      v-model="formData.broken"
                      label="Can you briefly describe what didn't work?"
                    ></v-text-field>
                  </div>
                  <v-checkbox
                    v-model="formData.checkedAccent"
                    label="Doesn't understand my accent well"
                  ></v-checkbox>
                  <div
                    v-show="formData.checkedAccent"
                    class="sub-q"
                    style="text-align: left"
                  >
                    <p>Are you aware of the dialect options for English?</p>
                    <p>
                      There are currently 9 different settings for English
                      (Ireland, UK, Australia, New Zealand etc.) that can be
                      selected in the options.
                    </p>
                    <ReinstallBtn>Re-install and Try it Out</ReinstallBtn>
                    <br /><br />
                    <p>Want support for another language?</p>
                    <v-text-field
                      v-model="formData.language"
                      label="Language"
                    ></v-text-field>
                  </div>
                  <v-checkbox
                    v-model="formData.checkedUseful"
                    label="Don't see how it's useful"
                  ></v-checkbox>
                  <div v-show="formData.checkedUseful" class="sub-q">
                    <p>
                      Try watching our
                      <a
                        class="external"
                        href="https://www.youtube.com/watch?v=qq-fMB1lOEM"
                        target="_blank"
                        >video guide</a
                      >
                      to see how LipSurf can be used.
                    </p>
                  </div>
                  <v-checkbox
                    v-model="formData.checkedInsufficient"
                    label="Doesn't do everything I want"
                  ></v-checkbox>
                  <div class="sub-q" v-show="formData.checkedInsufficient">
                    <v-text-field
                      v-model="formData.insufficient"
                      label="What else do you need LipSurf to do?"
                    ></v-text-field>
                  </div>
                  <v-checkbox
                    v-model="formData.checkedExpensive"
                    label="The paid version is too expensive"
                  ></v-checkbox>
                  <div class="sub-q" v-show="formData.checkedExpensive">
                    <v-text-field
                      v-model="formData.expensive"
                      label="What price would be right for you?"
                    ></v-text-field>
                  </div>
                  <v-checkbox
                    v-model="formData.checkedOther"
                    label="Other"
                  ></v-checkbox>
                  <div class="sub-q" v-show="formData.checkedOther">
                    <v-text-field
                      v-model="formData.other"
                      label="Comments"
                    ></v-text-field>
                  </div>
                </div>
                <div class="btn-bar">
                  <ReinstallBtn />
                  <v-btn color="accent" @click="submitted = true">Submit</v-btn>
                </div>
              </div>
            </div>
          </div>
          <div v-show="submitted">
            <h1 class="light">
              Thank you for taking the time to let us know how we can improve.
            </h1>
            <h2 class="light">
              We take all feedback seriously and we hope you try LipSurf again
              one day.
            </h2>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </BaseLayout>
</template>

<style scoped>
.v-input {
  margin-top: 0px !important;
}
.uninstalled-title {
  position: absolute;
  top: 150px;
  z-index: 9;
  text-shadow: white 2px 2px 2px;
}
.left-title {
  text-align: left;
  margin-bottom: 1.5em;
}

.left-title > * {
  margin-bottom: 0.3em;
  margin-top: 0.5em;
}
.sub-q {
  margin: 0 0 1em 2em;
}
.inner-form {
  text-align: center;
  padding: 0.5rem 1.5rem 1.5rem 1.5rem;
  border: 1px var(--primary-color) solid;
  border-top-width: 5px;
}
.form-cont::before {
  content: " ";
  background: url("../assets/img/sad-kitty-c.png") no-repeat;
  display: flex;
  top: 63px;
  position: relative;
  width: 276px;
  height: 328px;
  margin: 0 auto;
  left: 170px;
}
</style>

<script lang="ts" setup>
/**
 * This used to send up metrics to the amplitude relay, but
 * now we intercept the GET request with lambda@edge to 
 * make telemetry less likely to never get sent (which was
 * the case when needing to wait for the page to load and vue
 * to initialize - was losing about 30% of our data point)
 */

import BaseLayout from "./BaseLayout.vue";
import ReinstallBtn from "../components/ReinstallBtn.vue";
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

let FORM_DATA_DEFAULT = {
  checkedSite: false,
  checkedBroken: false,
  checkedAccent: false,
  checkedUseful: false,
  checkedInsufficient: false,
  checkedExpensive: false,
  checkedOther: false,
  site: "",
  broken: "",
  insufficient: "",
  language: "",
  expensive: "",
  other: "",
};

type FormData = typeof FORM_DATA_DEFAULT;
const db = window.firebase.firestore();

const route = useRoute();
const submitted = ref(false);
const formData = ref(FORM_DATA_DEFAULT);
let docP: Promise<firebase.firestore.DocumentReference>;

onMounted(() => {
  const id = route.query.id || "";
  docP = db.collection("uninstall-feedback").add({
    user_id: id,
  });
});

watch(formData, (newVal: FormData, oldVal: FormData) => {
  docP.then(doc => {
    // filter out blank and false values
    const reducedUpdates = Object.entries(newVal).reduce((memo, [key, val]) => {
      if (val !== false && val !== "")
        memo[key] = val;
      return memo;
    }, {} as Partial<FormData>);
    doc.update({
      ...reducedUpdates,
      created: window.firebase.firestore.FieldValue.serverTimestamp(),
    });
})}, {deep: true})

</script>