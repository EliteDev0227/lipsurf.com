<template>
  <svg
    class="success-check"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-5 -5 140 140"
  >
    <circle
      class="path circle"
      fill="none"
      stroke="#28a745"
      stroke-width="10"
      stroke-miterlimit="10"
      cx="65.1"
      cy="65.1"
      r="62.1"
    />
    <polyline
      class="path check"
      fill="none"
      stroke="#28a745"
      stroke-width="10"
      stroke-linecap="round"
      stroke-miterlimit="10"
      points="100.2,40.2 51.5,88.8 29.8,67.5 "
    />
  </svg>
</template>

<style scoped>
.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
}
.path.circle {
  animation: dash 1.1s ease-in-out;
}
.path.line {
  stroke-dashoffset: 1000;
  animation: dash 1.1s 0.35s ease-in-out forwards;
}
.path.check {
  stroke-dashoffset: -100;
  animation: dash-check 1.1s 0.35s ease-in-out forwards;
}

@keyframes dash {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes dash-check {
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
}

.success-check {
  width: 80px;
  margin: 0 auto;
}
</style>

<script lang="ts">
export default {
  name: "SuccessCheck",
};
</script>