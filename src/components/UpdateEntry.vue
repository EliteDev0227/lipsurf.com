<template>
  <li>
    <h4
      :id="version"
      class="version"
      :class="{ minor: version[version.length - 1] === '0' }"
    >
      {{ version }}
    </h4>
    <span class="date">{{ date }}</span>
    <div class="indented">
      <slot />
    </div>
  </li>
</template>

<style scoped>
.indented {
  margin-left: 2em;
}
li {
  padding-bottom: 2em;
}
.version {
  color: #777;
  display: inline-block;
  width: 5rem; /* to make version column-like */
}

.date {
  color: black;
  padding-left: 30px;
  font-weight: light;
}

.version.minor {
  color: #000;
  font-size: 1.2rem;
}
</style>

<script lang="ts" setup>
defineProps({
  version: {
    type: String,
  },
  date: {
    type: String,
  }
})
</script>
