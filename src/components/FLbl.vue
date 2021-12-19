<template>
  <span
    class="tag"
    title=""
    :class="{
      premium: premium,
      plus: plus,
      beta: beta,
      fullsize: fullsize,
    }"
    >{{ premium ? "PREM" : beta ? "BETA" : "PLUS" }}</span
  >
</template>

<style scoped>
.fullsize {
  font-size: 1em;
  line-height: 1em;
  vertical-align: initial;
}

.beta {
  color: var(--mute-color);
  background-color: var(--dark-mute-color);
}

.plus {
  color: #fff;
  background-color: var(--plus-color);
}

.premium {
  color: #564949;
  background-color: var(--premium-color);
}
</style>

<script lang="ts" setup>
// feature label
defineProps({
  premium: {
    required: false,
    type: Boolean,
  },
  plus: {
    require: false,
    type: Boolean,
  },
  beta: {
    require: false,
    type: Boolean,
  },
  fullsize: {
    require: false,
    type: Boolean,
  },
});
</script>