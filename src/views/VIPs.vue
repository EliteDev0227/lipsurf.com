<template>
  <BaseLayout>
    <div style="margin: 60px auto;max-width:600px">
      <h1>🕴️LipSurf VIPs</h1>
      <p class="mute">Posted November 3, 2021</p>
      <p>
        LipSurf VIPs is an official advocate program where community members
        participate directly in the future of our tools. We are particularly
        interested in the voices of users with disabilities.
      </p>
      <h2>🌟 Benefits</h2>
      <ul>
        <li>Shape the future of LipSurf</li>
        <li>
          Official recognition in the LipSurf community (e.g.
          <a target="_blank" href="https://discuss.lipsurf.com">forums</a>)
        </li>
        <li>
          Early access to new features (and new platforms such as the mobile
          apps)
        </li>
        <li>Get involved with product decisions</li>
        <li>Direct communication with the LipSurf team</li>
      </ul>

      <h2>📋 Responsibilities</h2>
      <ul>
        <li>
          Meet and correspond with team members and other VIPs to discuss how to
          make LipSurf fit your needs better
        </li>
        <li>Correspond via email and optionally voice/video chat</li>
        <li>Renew every year</li>
      </ul>

      <h2>❓ FAQs</h2>
      <dl>
        <dt>How many members will there be?</dt>
        <dd>
          We're keeping it very limited to start, less than 5. We will grow
          slowly to keep quality high.
        </dd>
        <dt>What is expected?</dt>
        <dd>
          Mostly just enthusiasm. If you are interested in voice/accessibility
          technology and want to get involved, the LipSurf VIPs program is a
          great opportunity.
        </dd>
        <dt>What if I become too busy to contribute?</dt>
        <dd>
          No worries! The program isn't a job. It's just an opportunity to build
          your skillset and audience within the a11y (accessibility) and voice
          ecosystems.
        </dd>
      </dl>

      <div class="btn-bar" style="text-align: center">
        <p class="mute">Applications close November 10, 2021</p>
        <v-btn
          class="medium-btn"
          large
          color="accent"
          href="https://docs.google.com/forms/d/e/1FAIpQLScx207oyZJHSCbLmxIipHfiN9nkAvkUYC74G5BnU-CbKVVrVQ/viewform?usp=sf_link"
          >Apply Now
        </v-btn>
      </div>
    </div>
  </BaseLayout>
</template>

<script lang="ts" setup>
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseLayout from "./BaseLayout.vue";
</script>