<template>
  <v-btn
    href="https://chrome.google.com/webstore/detail/lipsurf-voice-control-for/lnnmjmalakahagblkkcnjkoaihlfglon"
  >
    <IconBase name="download">
      <DownloadIcon />
    </IconBase>
    <slot>Give it Another Go</slot>
  </v-btn>
</template>

<script lang="ts" setup>
import { IconBase } from "@lipsurf/common/components";
import DownloadIcon from "@lipsurf/common/assets/icons/download.svg?inline";
</script>