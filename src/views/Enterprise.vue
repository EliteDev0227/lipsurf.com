<template>
  <BaseLayout>
    <!-- Preload -->
    <!-- currently don't have 4x images for kiosk animation -->
    <link
      v-for="i of animImages"
      :key="`4x${i}`"
      rel="preload"
      :href="`/assets/anim/kiosk_4x/${i}.png`"
      as="image"
      media="(min-width: 2201px)"
    />
    <link
      v-for="i of animImages"
      :key="`2x${i}`"
      rel="preload"
      :href="`/assets/anim/kiosk_2x/${i}.png`"
      as="image"
      media="(min-width: 1195px) and (max-width: 2200px)"
    />
    <link
      v-for="i of animImages"
      :key="`${i}`"
      rel="preload"
      :href="`/assets/anim/kiosk/${i}.png`"
      as="image"
      media="(max-width: 1194px)"
    />
    <v-container class="maxed">
      <v-row>
        <v-col :md="7" :cols="12">
          <h1>
            Drop-in<br />
            Voice Control
          </h1>
          <div class="tagline">
            <strong>LipSurf.js</strong> analyzes what’s showing on-screen and
            automatically creates voice commands for your webapp.
          </div>
          <div class="btn-bar">
            <v-btn
              class="medium-btn"
              large
              color="accent"
              @click="showRequestInvite = true"
              >Request Invite</v-btn
            >
          </div>
        </v-col>
        <v-col :md="5" :cols="12">
          <div id="header-anim-cont">
            <!-- <img src="/img/kiosk.png" alt="voice-controlled kiosk"> -->
            <HeaderAnim name="kiosk" id="header-anim" />
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="maxed">
      <v-row class="salient-features">
        <v-col :sm="4" :cols="12">
          <h4>Instant Turnaround</h4>
          <p>
            Get a live demo of voice control working on your webapp same-day.
          </p>
        </v-col>
        <v-col :sm="4" :cols="12">
          <h4>No Code</h4>
          <p>Works on top of your existing frontend.</p>
        </v-col>
        <v-col :sm="4" :cols="12">
          <h4>Production Ready</h4>
          <p>
            LipSurf has been actively used in production by thousands since
            2017.
          </p>
          <a
            href="https://chrome.google.com/webstore/detail/lipsurf/lnnmjmalakahagblkkcnjkoaihlfglon"
            >Try it now »</a
          >
        </v-col>
      </v-row>
    </v-container>
    <svg class="bg-decor">
      <polygon
        points="0,800 10000,1100 10000,250 0,600"
        style="fill:#cbeccb;"
      />
    </svg>
    <v-container class="maxed">
      <h2 style="text-align: center">How it Works</h2>
      <v-row no-gutters>
        <v-col :sm="5" :cols="12">
          <h3>Installation</h3>
          <p>Drop the script in your page.</p>
          <code>
            <span class="token tag2"
              ><span class="token tag2"
                ><span class="token punctuation">&lt;</span>script</span
              >
              <span class="token attr-name">src</span
              ><span class="token attr-value"
                ><span class="token punctuation">=</span
                ><span class="token punctuation">"</span>path/to/lipsurf.js<span
                  class="token punctuation"
                  >"</span
                ></span
              ><span class="token punctuation">&gt;</span></span
            ><span class="token script"></span
            ><span class="token tag2"
              ><span class="token tag2"
                ><span class="token punctuation">&lt;/</span>script</span
              ><span class="token punctuation">&gt;</span></span
            >
          </code>
          <div style="text-align:center;font-weight: bold; margin:0.7em">
            -or-
          </div>
          <p>Install as a Chrome/Chromium extension.</p>
        </v-col>
        <v-col
          :sm="2"
          :cols="12"
          align-self="center"
          style="text-align: center"
        >
          <div class="d-none d-sm-flex">
            <img src="/img/big-arrow.png" alt="voice-controlled kiosk" />
          </div>
          <div class="d-sm-none">
            <img src="/img/big-arrow-down.png" alt="voice-controlled kiosk" />
          </div>
        </v-col>
        <v-col :sm="5" :cols="12">
          <ol>
            <li>
              Connects to a speech-to-text engine of your choice and waits for
              incoming transcripts.
            </li>
            <li>
              Processes transcript into a normalized form suitable for your
              application and language selection.
            </li>
            <li>
              Inspects DOM and decides what to click based on what’s currently
              in the viewport.
            </li>
          </ol>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="margin-top: 4rem" class="maxed">
      <v-row>
        <v-col align-self="center" :md="7" :cols="12">
          <h2>Fitting</h2>
          <v-row>
            <v-col :md="6" :cols="12">
              <h4>Your Hardware</h4>
              <p>
                Kiosks, Chromebooks, tablets, TVs, or even smartphones. We’re
                completely hardware independent.
              </p>
            </v-col>
            <v-col :md="6" :cols="12" align-self="center" style="z-index: 10">
              <h4>Flexible STT Engine</h4>
              <p>
                Works with any speech-to-text service, including: Google STT,
                Amazon Transcribe, IBM Watson, Microsoft Cognitive Services,
                PicoVoice, etc.
              </p>
              <p class="mute small">
                Can’t decide what’s best for your application? We can help.
              </p>
            </v-col>
          </v-row>
        </v-col>
        <v-col :md="5" :cols="12">
          <div style="display: flex; justify-content: center; z-index: 1">
            <img src="/img/clouds.png" alt="voice-controlled kiosk" />
          </div>
        </v-col>
      </v-row>
    </v-container>
    <svg class="bg-decor">
      <polygon points="0,150 10000,550 10000,700 0,750" style="fill:#b7e0f0;" />
    </svg>
    <v-container style="margin-top: -100px" class="maxed">
      <v-row>
        <v-col align-self="center" order-sm="first" order="last">
          <div style="display: flex; justify-content: center;">
            <img src="/img/girl-on-phone.png" alt="voice-controlled kiosk" />
          </div>
        </v-col>
        <v-col>
          <v-row>
            <v-col :sm="6" :cols="12" order-sm="first" order="last">
              <br />
              <br />
              <h4>Multilingual</h4>
              <p>
                Over 100 languages* and dialects supported. Enhanced models for:
                English, Spanish, French, Russian and Japanese.
              </p>
              <p class="mute small">
                * Language availability depends on STT adapter.
              </p>
            </v-col>
            <v-col :sm="6" :cols="12">
              <h2 style="text-align: right; margin-right: 1em">Features</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col :sm="6" :cols="12">
              <h4>Live Transcript</h4>
              <p>
                Show users what they’re saying in realtime so they’re confident
                they’re being understood.
              </p>
              <br />
              <h4>Fuzzy Matching</h4>
              <p>
                Transcripts are processed and normalized for your application so
                commands are more forgiving for users.
              </p>
            </v-col>
            <v-col :sm="6" :cols="12">
              <h4>Disambiguation</h4>
              <p>
                If there are multiple buttons with similar text, the user will
                be prompted to choose between the best matches.
              </p>
              <br />
              <h4>Analytics</h4>
              <p>
                Know where your users are getting slowed down. Understand where
                to prioritize optimizations.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="maxed">
      <h2>Let Us Handle This</h2>
      <v-row>
        <v-col :sm="4" :cols="12">
          <h4>Integration</h4>
          <p>We hold your hand through each step of the integration.</p>
        </v-col>
        <v-col :sm="4" :cols="12">
          <h4>Consulting</h4>
          <p>
            Let our experienced professionals handle whatever you don't want to.
          </p>
        </v-col>
        <v-col :sm="4" :cols="12">
          <h4>Support</h4>
          <p>
            Phone, chat and email help available Monday-Saturday 9am-6pm EST.
          </p>
        </v-col>
      </v-row>
      <div style="text-align: center">
        <div class="btn-bar">
          <v-btn
            class="medium-btn"
            large
            color="accent"
            @click="showRequestInvite = true"
            >Request Invite</v-btn
          >
        </div>
      </div>
    </v-container>
    <svg class="bg-decor">
      <polygon
        points="0,360 10000,800 10000,1200 0,750"
        style="fill:#fdd024;"
      />
    </svg>
    <v-dialog
      v-model="showRequestInvite"
      content-class="dialog"
      max-width="500px"
    >
      <v-card flat min-height="350px">
        <v-card-title content-class="header">
          Request Invite
        </v-card-title>
        <v-card-text>
          <Notice type="error" :show.sync="showErrorMsg"
            ><span v-html="errorMsg"></span
          ></Notice>
          <div v-if="submitted">
            <div style="text-align: center">
              <SuccessCheck />
            </div>
            <h3>Successfully submitted request.</h3>
            <p>We will reach out to you shortly.</p>
            <v-btn color="accent" @click="showRequestInvite = false"
              >Close</v-btn
            >
          </div>
          <v-form v-else @submit="submit" :disabled="loading">
            <v-text-field
              v-model="email"
              label="Work email"
              required
              outlined
            ></v-text-field>
            <v-combobox
              :items="companySizes"
              v-model="companySize"
              label="Select your company size"
              required
              outlined
            >
            </v-combobox>
            <v-text-field
              v-model="webappUrl"
              label="URL of webapp you want demoed with voice control"
              outlined
            >
            </v-text-field>
            <v-textarea
              rows="4"
              v-model="otherInfo"
              outlined
              label="Tell us more about your project, needs and timeline."
            ></v-textarea>
            <v-btn color="accent" @click="submit">Submit</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </BaseLayout>
</template>

<style scoped>
@import "../css/landing-shared.css";

#header-anim-cont {
  margin-bottom: -100px;
}

h1 {
  font-size: 3.5rem;
  line-height: 4rem;
  margin-bottom: 0.5em;
}
h2 {
  font-size: 2rem;
}
.tagline {
  font-size: 1.1rem;
  letter-spacing: 1.5px;
}
.tagline strong {
  margin-right: 0.2em;
}

.small {
  font-size: 0.9em;
}
ol > li {
  margin: 1em 0;
}
.salient-features > div {
  padding: 0 1.5em;
}
/** code syntax highlighting */
.token.tag2 {
  color: #e2777a;
}
.token.attr-value {
  color: #7ec699;
}
.token.punctuation {
  color: #ccc;
}
code {
  background: #333;
  padding: 0.5em;
  font-weight: 300;
}
</style>

<script lang="ts" setup>
import BaseLayout from "./BaseLayout.vue";
import SuccessCheck from "../components/SuccessCheck.vue";
import { Notice } from "@lipsurf/common/components";
import HeaderAnim from "../components/HeaderAnim.vue";
import { ref, watch } from "vue";

const db = window.firebase.firestore();
// 0 - 13
// make the animation load faster, enables preloading the images
const animImages = Array.from(Array(14).keys());

interface IWindow extends Window {
  webfontReadyPromise: Promise<void>;
  WebFont: any;
}

declare var window: IWindow;

const errorMsg = ref("");
const showErrorMsg = ref(false);
const loading = ref(false);

const showRequestInvite = ref(false);
const submitted = ref(false);
const companySizes = ["1-10", "11-50", "51-1000", "1000+"];

// form
const email = ref("");
const companySize = ref("1-10");
const webappUrl = ref("");
const otherInfo = ref("");

window.webfontReadyPromise.then(() => {
  window.WebFont.load({
    google: {
      families: ["Special Elite"],
    },
  });
});

async function submit() {
  showErrorMsg.value = false;
  loading.value = true;
  try {
    const docP = await db.collection("enterprise-interest").add({
      email: email.value,
      webapp_url: webappUrl.value,
      other_info: otherInfo.value,
      company_size: companySize.value,
    });
    submitted.value = true;
  } catch (e) {
    console.error("error submitting enterprise interest", e);
    submitted.value = false;
    errorMsg.value =
      'Sorry, there was an issue submitting your request. Please check your internet connection and try again, or <a href="/contact">reach out to us</a>.';
    showErrorMsg.value = true;
  } finally {
    loading.value = false;
  }
}

watch(showRequestInvite, () => {
  submitted.value = false;
});
</script>