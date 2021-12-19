<template>
  <BaseLayout>
    <v-container>
      <h1>Login/Create Account</h1>
      <SignIn @signed-in="redirect" />
    </v-container>
  </BaseLayout>
</template>

<style>
@import "../../node_modules/firebaseui/dist/firebaseui.css";
</style>

<script lang="ts" setup>
import BaseLayout from "./BaseLayout.vue";
import { SignIn } from "@lipsurf/common/components";
import { useRouter } from "vue-router";

const router = useRouter();

function redirect() {
  router.push({ path: "/settings/plan" });
}
</script>
