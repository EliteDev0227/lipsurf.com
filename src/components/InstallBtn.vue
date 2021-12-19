<template>
  <v-btn
    class="medium-btn"
    large
    color="accent"
    @click="install"
    target="_blank"
    href="https://chrome.google.com/webstore/detail/lipsurf/lnnmjmalakahagblkkcnjkoaihlfglon"
  >{{primary}} <span
      v-if="secondary"
      class="light-mute"
    >{{secondary}}</span>
  </v-btn>
</template>

<script lang="ts" setup>

const props = defineProps({
  primary: {
    type: String,
    default: "Add to Chrome",
  },
  secondary: {
    type: String,
    default: "- it's free"
  },
});

function install() {
  // @ts-ignore
  gtag("event", "click install button", {
    event_category: "install",
  });
}
</script>