<template>
  <span class="item-cont">
    <transition-group name="rolodex">
      <span v-for="(item, index) of items" :key="item" v-show="index === i % items.length">{{ item }}</span>
    </transition-group>
  </span>
</template>

<style scoped>
.item-cont span {
  position: relative;
  border-bottom: 1px solid var(--light-text-color);
}
.item-cont span span {
  left: 0;
  perspective: 1000px;
  position: absolute;
  display: inline-block;
  white-space: nowrap;
  transform-style: preserve-3d;
}

.rolodex-enter-active {
  animation: flip-horizontal-top 0.2s ease-in both;
}
.rolodex-leave-active {
  animation: flip-horizontal-bottom 0.2s ease-out both;
}
@keyframes flip-horizontal-top {
  0% {
    transform: rotateX(-90deg) translateZ(-30px);
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg) translateZ(0px);
    opacity: 1;
  }
}

@keyframes flip-horizontal-bottom {
  0% {
    transform: rotateX(0deg) translateZ(0px);
    opacity: 1;
  }
  100% {
    transform: rotateX(90deg) translateZ(-30px);
    opacity: 0;
  }
}

</style>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  speed: {
    default: 2500
  },
  items: {

  }
});
const i = ref(0);

onMounted(() => {
  setInterval(() => {
    i.value += 1;
  }, props.speed);
});
</script>

