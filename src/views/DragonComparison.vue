<template>
  <BaseLayout>
    <v-container style="max-width: 1040px;">
      <h1>Comparison with Nuance Dragon NaturallySpeaking</h1>
      <time
        datetime="2021-3-26"
        class="mute"
        style="text-align: right; display: block"
        >26 March 2021</time
      >
      <v-row row wrap>
        <div class="intro">
          <blockquote style="max-width: 500px; float: right;">
            <div>
              <p>
                <span class="profile">
                  <img class="circular-photo" src="/img/Dan.jpg" />
                </span>
                Great alternative for Dragon NaturallySpeaking as it is steadily
                losing quality and stability in Chrome.
              </p>
              <div class="author more-mute">
                Dan Darkow
              </div>
            </div>
          </blockquote>
          LipSurf's speech-recognition extension is
          <strong>easier to learn</strong>, <strong>more efficient</strong>,
          <strong>less buggy</strong>, <strong>less expensive</strong> and has a
          <strong>higher average customer rating</strong> compared to Dragon
          NaturallySpeaking. The only reason you might need to stick with Dragon
          is if you need Desktop app support. Fortunately, most apps today work
          on the web. <a href="https://outlook.live.com/owa/">Outlook.com</a>,
          <a href="https://office.live.com/start/Word.aspx">Word Online</a> and
          <a href="https://docs.google.com/">Google Docs</a> are great examples
          of office productivity that has moved to the web from the desktop.
          Modern software today is built for the browser, hence LipSurf's
          emphasis on being a browser-based tool. Since LipSurf works through
          Google Chrome, it has a much smoother integration with websites and
          webapps.
        </div>
        <blockquote style="max-width: 800px; margin: auto">
          <div>
            <p>
              <span class="profile">
                <img class="circular-photo" src="/img/Steve.jpg" />
              </span>
              I have been looking for a replacement for Dragon Naturally
              Speaking for my emails as Dragon has quite high processor
              overheads... The accuracy is really good and I'm saving tons of
              time writing emails... Couldn't be happier right now - I've been
              looking for something like this for ages!
            </p>
            <div class="author more-mute">
              Steve Whitehead
            </div>
          </div>
        </blockquote>
      </v-row>
      <div class="table threecols collapse">
        <div></div>
        <div class="title">
          <h4 class="lipsurf-header">LipSurf</h4>
        </div>
        <div class="title foot">
          <h5 style="color: #666">
            Dragon NaturallySpeaking Professional Individual
          </h5>
        </div>
        <div class="head">
          Chrome Webstore user rating <br /><span class="mute small"
            >(as of 3/2021)</span
          >
        </div>
        <div>
          <span title="5 stars" class="star"></span>
          <span title="5 stars" class="star"></span>
          <span title="5 stars" class="star"></span>
          <span title="5 stars" class="star"></span>
          <span title="5 stars" class="star"></span>
        </div>
        <div class="foot">
          <span title="2 stars" class="star"></span>
          <span title="2 stars" class="star"></span>
        </div>
        <div class="head">
          Speech recognition accuracy
        </div>
        <div>
          Excellent
        </div>
        <div class="foot">
          Good
        </div>
        <div class="head">
          Dictate emails, docs, and chats online
        </div>
        <div>
          <span class="check-mark"></span>
        </div>
        <div class="foot">
          <span class="check-mark"></span>
        </div>
        <div class="head">
          Deep Gmail integration
        </div>
        <div>
          <span class="check-mark"></span>
        </div>
        <div class="foot"></div>
        <div class="head">
          Custom vocabulary
        </div>
        <div>
          <span class="check-mark"></span>
        </div>
        <div class="foot">
          <span class="check-mark"></span>
        </div>
        <div class="head">
          Custom plugins
        </div>
        <div>
          <span class="check-mark"></span>
        </div>
        <div class="foot">
          <span class="check-mark"></span>
        </div>
        <div class="head">
          Compatibility
        </div>
        <div>
          <span>Windows, Mac, Linux and Chromebooks</span>
        </div>
        <div class="foot">
          <span>Windows</span>
        </div>
        <div class="head">
          Works on slow computers
        </div>
        <div>
          <span class="check-mark"></span>
        </div>
        <div class="foot"></div>
        <div class="head">
          Works on desktop apps
        </div>
        <div></div>
        <div class="foot">
          <span class="check-mark"></span>
        </div>
        <div class="head">
          Free forever plan
        </div>
        <div>
          <span class="check-mark"></span>
        </div>
        <div class="foot"></div>
        <div class="head">
          Install/calibration time
        </div>
        <div>
          Seconds
        </div>
        <div class="foot">
          Hours
        </div>
        <div class="head">
          Price
        </div>
        <div>
          $6/mo
        </div>
        <div>
          $300.00
        </div>
        <div class="head">
          Upgrade cost
        </div>
        <div>
          $0 (included)
        </div>
        <div class="foot">
          $150.00
        </div>
      </div>
      <p>See an error? <a href="mailto:info@lipsurf.com">Let us know</a>.</p>

      <div
        class="btn-bar"
        style="text-align:center;margin-top=2em;position:relative;z-index=10;"
      >
        <InstallBtn primary="Get LipSurf Now" secondary="- it's free" />
      </div>
    </v-container>
  </BaseLayout>
</template>
<style scoped>
.small {
  font-size: 0.8em;
}
.intro {
  margin-top: 2em;
  text-indent: 2em;
  display: inline-block;
  font-size: 1.1em;
  line-height: 2em;
}
.intro blockquote {
  line-height: normal;
}
.table {
  display: flex;
  flex-wrap: wrap;
  margin: 2em 0 3em 0;
  padding: 0;
  position: relative;
  top: 1px;
  left: 1px; /*compensate for border offset*/
}
.title {
  text-align: center;
  margin: 0 auto;
  position: relative;
}
.table > div {
  margin: -1px 0 0 -1px; /*border collapse offset*/
}
.lipsurf-header::before {
  content: "";
  background: url("../assets/img/icon-128.png") no-repeat;
  background-size: contain;
  width: 40px;
  height: 40px;
  margin-bottom: -40px;
  top: -30px;
  position: relative;
  display: inline-block;
}
.table .head {
  background: var(--plus-light-color);
  text-align: right;
}
/* .table :not(.head) {
    max-width: 200px;
} */
.table > div {
  box-sizing: border-box;
  flex-grow: 1;
  width: 100%;
  padding: 0.8em 1.2em;
  overflow: hidden; /* Or flex might break*/
  list-style: none;
  border: solid 1px white;
  text-align: center;
}

/* Table column sizing
================================== */
.threecols > div {
  width: 33.33%;
}

@media all and (max-width: 500px) {
  .table.collapse {
    display: block;
  }
  .table.collapse > div {
    width: 100% !important;
  }
  .table.collapse .foot {
    margin-bottom: 1em;
  }
}

/* Non-Flex modernizer fallback */
.no-flexbox .table {
  display: block;
}
.no-flexbox .table > div {
  width: 100%;
}
.no-flexbox .table .foot {
  margin-bottom: 1em;
}

strong {
  font-weight: 500;
}

.check-mark {
  content: "";
  width: 1em;
  height: 1em;
  display: block;
  background: url("~@lipsurf/common/assets/icons/green-check.svg") no-repeat;
  margin: 0 auto;
}

.star {
  content: "";
  width: 1em;
  height: 1em;
  display: inline-block;
  background: url("~@lipsurf/common/assets/icons/gold-star.svg") no-repeat;
}
</style>
<script lang="ts" setup>
import BaseLayout from "./BaseLayout.vue";
import { IconBase } from "@lipsurf/common/components";
import InstallBtn from "../components/InstallBtn.vue";
import FLbl from "../components/FLbl.vue";

</script>
