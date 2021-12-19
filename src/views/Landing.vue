<template>
  <BaseLayout>
    <!-- Preload -->
    <link
      v-for="i of animImages"
      :key="`4x${i}`"
      rel="preload"
      :href="`/assets/anim/girl_4x/${i}.png`"
      as="image"
      media="(min-width: 2201px)"
    />
    <link
      v-for="i of animImages"
      :key="`2x${i}`"
      rel="preload"
      :href="`/assets/anim/girl_2x/${i}.png`"
      as="image"
      media="(min-width: 1195px) and (max-width: 2200px)"
    />
    <link
      v-for="i of animImages"
      :key="`${i}`"
      rel="preload"
      :href="`/assets/anim/girl/${i}.png`"
      as="image"
      media="(max-width: 1194px)"
    />
    <template>
      <div class="grabber narrow">
        <h1 class="light center">
          <strong>Voice Control</strong> for the <strong>Web</strong>.
        </h1>
        <div
          class="btn-bar"
          style="text-align:center;margin-top=2em;position:relative;z-index=10;"
        >
          <InstallBtn />
        </div>
      </div>
    </template>
    <template v-slot:outer>
      <div id="header-anim-cont">
        <HeaderAnim id="header-anim" name="girl" />
      </div>
      <v-container class="testimonials maxed">
        <v-row row wrap>
          <v-col xs12 sm4>
            <blockquote>
              <div>
                <p>
                  <span class="profile">
                    <img class="circular-photo" src="/img/Jessica.jpg" />
                  </span>
                  I had [LipSurf] up and running [...] within 5 - 10 minutes. It
                  is amazing. It works in [Chrome]... and Dragon never did.
                </p>
                <div class="author more-mute">Jessica DeVita</div>
              </div>
            </blockquote>
          </v-col>
          <v-col xs12 sm4>
            <blockquote>
              <div>
                <p>
                  <span class="profile">
                    <img class="circular-photo" src="/img/Steve.jpg" />
                  </span>
                  Couldn't be happier right now - I've been looking for
                  something like this for ages!
                </p>
                <div class="author more-mute">Steve Whitehead</div>
              </div>
            </blockquote>
          </v-col>
          <v-col xs12 sm4>
            <blockquote>
              <div>
                <p>
                  <span class="profile">
                    <img class="circular-photo" src="/img/Shea.jpg" />
                  </span>
                  [I]t has been absolutely life-changing as I am dyslexic it
                  helped me a great deal and with the support I have received
                  has been amazing!
                </p>
                <div class="author more-mute">Shea C.</div>
              </div>
            </blockquote>
          </v-col>
        </v-row>
      </v-container>
      <section class="center">
        <div class="screen-height" style="margin: 2em 0 7em 0">
          <h3>
            Time to Ditch
            <span style="font-weight: 100">Alexa &amp; Google Home</span>
          </h3>
          <div
            class="butt-lick"
            style="
              position: relative;
              text-align: left;
              max-width: 498px;
              margin: 2em auto;
              line-height: 160%;
              padding: 0 20px;
            "
          >
            <p>
              Let’s face it. The only useful thing your smart speaker ever did
              was tell you the weather. The big problem with smart speakers is
              that they’re siloed from the place where we do all our productive
              stuff - the web.
            </p>
            <p>
              LipSurf lives and breaths on the web - giving you voice
              productivity and convenience on the tools you’re already using
              daily.
            </p>
            <p>
              You simply say things and LipSurf does them for you. It can be as
              simple as scrolling a page or playing a video, or it can be more
              complex like a custom shortcut that runs a Salesforce task for
              you.
            </p>
          </div>
        </div>
      </section>
      <v-container fluid>
        <v-row row wrap class="screen-height">
          <v-col
            xs12
            sm6
            align-self-center
            fill-height
          >
            <v-row
              column
              align-content-center
              justify-center
              align-center
              fill-height
            >
              <v-col>
                <div class="section-side-desc">
                  <div class="decor mic">
                    <h2>Email</h2>
                    <p>
                      Not only can you dictate emails at 160wpm -- select,
                      label, move, delete messages &amp; more.
                    </p>
                  </div>
                  <p class="works-with">
                    <img src="/img/gmail-icon.png" title="Gmail logo" />
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            xs12
            sm6
            align-self-center
            fill-height
          >
            <video
              playsinline
              autoplay
              muted
              loop
              poster
              class="desktop-only demo"
            >
              <source src="/vid/gmail-demo.webm" type="video/webm" />
              <source src="/vid/gmail-demo.mp4" type="video/mp4" />
            </video>
            <video
              playsinline
              autoplay
              muted
              loop
              poster
              class="mobile-only demo"
            >
              <source src="/vid/gmail-demo-sm.webm" type="video/webm" />
              <source src="/vid/gmail-demo-sm.mp4" type="video/mp4" />
            </video>
          </v-col>
        </v-row>
      </v-container>
      <svg class="bg-decor">
        <polygon
          points="0,200 10000,-200 10000,1200 0,550"
          style="fill: #cbeccb"
        />
      </svg>
      <v-container fluid>
        <v-row row wrap class="screen-height flipped">
          <v-col
            xs12
            sm6
            align-self-center
          >
            <video
              playsinline
              autoplay
              muted
              loop
              poster
              class="desktop-only demo"
            >
              <source src="/vid/office-demo.webm" type="video/webm" />
              <source src="/vid/office-demo.mp4" type="video/mp4" />
            </video>
            <video
              playsinline
              autoplay
              muted
              loop
              poster
              class="mobile-only demo"
            >
              <source src="/vid/office-demo-sm.webm" type="video/webm" />
              <source src="/vid/office-demo-sm.mp4" type="video/mp4" />
            </video>
          </v-col>
          <v-col
            xs12
            sm6
            align-self-center
            fill-height
          >
            <v-row
              column
              align-content-center
              justify-center
              align-center
              fill-height
            >
              <v-col>
                <div class="section-side-desc">
                  <div class="decor office">
                    <h2>Office</h2>
                    <p>
                      Give your hands a break while you do office tasks with
                      your voice.
                    </p>
                  </div>
                  <p class="works-with">
                    <img src="/img/docs-icon.png" title="Google Docs logo" />
                    <img
                      src="/img/sheets-icon.png"
                      title="Google Sheets logo"
                    />
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <svg class="bg-decor">
        <polygon
          points="0,150 10000,550 10000,400 0,650"
          style="fill: #fdd024"
        />
      </svg>
      <v-container fluid>
        <v-row row wrap class="screen-height">
          <v-col
            xs12
            sm6
            align-self-center
            fill-height
          >
            <v-row
              column
              align-content-center
              justify-center
              align-center
              fill-height
            >
              <v-col>
                <div class="section-side-desc">
                  <div class="decor leisure">
                    <h2>Leisure</h2>
                    <p>
                      Eat in front of your computer without getting your
                      keyboard greasy — while you watch videos, or browse social
                      media.
                    </p>
                  </div>
                  <p class="works-with">
                    <img src="/img/youtube-icon.png" title="YouTube logo" />
                    <img src="/img/reddit-icon.png" title="Reddit logo" />
                    <img src="/img/fb-icon.png" title="Facebook logo" />
                    <img src="/img/twitter-icon.png" title="Twitter logo" />
                    ...
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            xs12
            sm6
            align-self-center
          >
            <video
              playsinline
              autoplay
              muted
              loop
              poster
              class="desktop-only demo"
            >
              <source src="/vid/leisure-demo.webm" type="video/webm" />
              <source src="/vid/leisure-demo.mp4" type="video/mp4" />
            </video>
            <video
              playsinline
              autoplay
              muted
              loop
              poster
              class="mobile-only demo"
            >
              <source src="/vid/leisure-demo-sm.webm" type="video/webm" />
              <source src="/vid/leisure-demo-sm.mp4" type="video/mp4" />
            </video>
          </v-col>
        </v-row>
      </v-container>
      <svg class="bg-decor">
        <polygon
          points="0,200 10000,-200 10000,1200 0,550"
          style="fill: #b7e0f0"
        />
      </svg>
      <v-container class="maxed">
        <v-row row wrap>
          <v-col xs12 md4>
            <div class="quick-feature">
              <h2>Custom Shortcuts</h2>
              <p>
                Add your own super-efficient voice shortcuts to do anything: go
                to sites, click buttons, fill in forms etc. The possibilities
                are limitless.
              </p>
            </div>
          </v-col>
          <v-col xs12 md4>
            <div class="quick-feature">
              <h2>Offline Wake-Word</h2>
              <p>
                Unlike Siri, Alexa, and Google Home, LipSurf respects your
                privacy by not always listening. It stays offline until you say
                “hey LipSurf”.
              </p>
            </div>
          </v-col>
          <v-col xs12 md4>
            <div class="quick-feature">
              <h2>Open-Source Plugins</h2>
              <p>
                Anyone can make a plugin for LipSurf — it’s fully extensible!
              </p>
              <p><a href="https://docs.lipsurf.com">More Details ›</a></p>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <section class="center" style="margin-top: 3em">
        <h4>
          <strong>LipSurf awaits your command</strong>.<br />
          Simply add it to Chrome and you’ll be in the future
          <strong>30 seconds from now</strong>.
        </h4>
        <div>
          <InstallBtn />
        </div>
        <img style="margin: 3em" src="/img/kb-cat.png" />
      </section>
    </template>
  </BaseLayout>
</template>

<style scoped>
@import "../css/landing-shared.css";

.desktop-only {
  display: none;
}

@media screen and (min-width: 701px) {
  .mobile-only {
    display: none;
  }
  .desktop-only {
    display: block;
  }
}

video.demo {
  width: calc(100vw - 1.5em);
  max-width: 1200px;
  box-shadow: -1px 1px 7px #bbb;
}
.quick-feature {
  margin: 0 1em;
}
.screen-height {
  min-height: 500px;
}
.testimonials {
  margin-top: 100px;
}
.medium-btn {
  margin: 0 auto;
}
.decor::before {
  content: "";
  position: absolute;
}
.mic::before {
  background-image: url("../assets/img/mic.png");
  width: 140px;
  height: 117px;
  top: -100px;
  left: -170px;
}
.office::before {
  background-image: url("../assets/img/hands.png");
  width: 135px;
  height: 106px;
  top: -60px;
  left: 290px;
}
.leisure::before {
  background-image: url("../assets/img/food.png");
  width: 135px;
  top: -150px;
  left: -150px;
  height: 178px;
}
.butt-lick::before {
  content: "";
  position: absolute;
  background-image: url("../assets/img/butt-lick.png");
  width: 162px;
  height: 130px;
  top: 150px;
  right: -250px;
}
h4 {
  font-weight: 200;
  font-size: 1.7rem;
}

.works-with {
  margin-top: 30px;
  color: var(--dark-mute-color);
  display: flex;
  align-items: flex-end;
}

.works-with img {
  opacity: 0.8;
  margin: 0.3em;
}

h3 {
  font-weight: 200;
  font-size: 1.8rem;
}
blockquote > div {
  max-width: 400px;
}

.section-side-desc h2 {
  margin-top: 0;
}
.section-side-desc {
  position: relative;
  margin-top: -2em;
  max-width: 300px;
  min-width: 200px;
}
.section-side-desc {
  margin-right: 50px;
}
.flipped .section-side-desc {
  margin-right: 0px;
  margin-left: 50px;
  margin-top: 3em;
}

#header-anim-cont {
  overflow-y: visible;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto -100 auto;
}

#header-anim {
  overflow-x: hidden;
  margin-top: -20px;
  margin-left: -21%;
  width: 150%;
}

.narrow {
  width: calc(100% - 2em);
  max-width: 750px;
  margin: 0 auto;
  padding: 1em;
}

.grabber {
  z-index: 10;
  position: relative;
}

.grabber h1 {
  padding-bottom: 0;
  margin-bottom: 0;
  margin-top: 0;
  line-height: 1.1em;
}

@media (min-width: 540px) {
  #header-anim {
    width: 120%;
    margin-left: -8%;
  }
}

@media screen and (min-width: 600px) {
  .medium-btn {
    width: 300px;
  }
  #header-anim-cont {
    margin: -130px auto -100px auto;
  }
  .flipped video {
    float: right;
  }
  .testimonials {
    margin-top: -100px;
  }
  video.demo {
    margin-left: -100px;
    width: 100vw;
  }
  .flipped video.demo {
    margin-right: -100px;
    margin-left: 0px;
    width: 75vw;
  }
  .section-side-desc {
    margin-right: 150px;
  }
  .flipped .section-side-desc {
    margin-left: 110px;
    margin-right: 0;
    margin-top: 0;
  }
}

@media screen and (min-width: 960px) {
  .flipped video.demo {
    margin-right: -200px;
  }
  .flipped .section-side-desc {
    margin-left: 250px;
  }
}

@media (min-width: 800px) {
  .grabber h1 {
    font-size: 3rem;
  }
  #header-anim {
    margin: -100px auto 0 auto;
    padding-left: 2%;
    width: 100%;
  }
}

@media (min-height: 1000px) {
  #header-anim-cont {
    max-width: 1400px;
  }
}

@media (min-height: 1500px) {
  #header-anim-cont {
    max-width: 2000px;
  }
}
</style>

<script lang="ts" setup>
import lottie from "lottie-web";
import BaseLayout from "./BaseLayout.vue";
import HeaderAnim from "../components/HeaderAnim.vue";
import InstallBtn from "../components/InstallBtn.vue";

// 0 - 32
// make the animation load faster, enables preloading the images
const animImages = Array.from(Array(33).keys());
</script>

