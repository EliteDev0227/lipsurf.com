<template functional>
  <UpdateEntry
    date="2020-1-14"
    :version="props.version"
  >
    <li>
      Fixed bugs in
      <f-lbl plus />WaniKani and
      <f-lbl premium />dictation mode.
    </li>
  </UpdateEntry>
</template>

<script lang="ts">
import Vue from "vue";
import UpdateEntry from "../UpdateEntry.vue";

export default {
  props: ["version"],
};
</script>