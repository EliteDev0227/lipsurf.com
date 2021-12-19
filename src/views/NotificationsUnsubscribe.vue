<template>
  <BaseLayout>
    <div style="margin: 60px auto;max-width:600px">
      <template v-if="done">
        <template v-if="error">
          <div style="text-align: center">
            <h1>Unsubscribe error.</h1>
            <p class="big">
              {{ errorMsg || "Sorry for the inconvenience : (" }}
            </p>
            <p>
              <router-link :to="{ name: 'contact' }">Contact us</router-link>
              and we can unsubscribe you manually.
            </p>
          </div>
        </template>
        <template v-else>
          <div style="text-align: center">
            <h1>Unsubscribe successful.</h1>
          </div>
        </template>
      </template>
      <template v-else>
        <h1>Unsubscribing... please wait.</h1>
      </template>
    </div>
  </BaseLayout>
</template>

<style scoped>
</style>

<script lang="ts" setup>
import BaseLayout from "./BaseLayout.vue";
import { API_BASE_URL, DEBUG } from "@lipsurf/common/constants";
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const userNotificationsId = ref(route.query.id as string);
const error = ref(false);
const errorMsg = ref("");
const email = ref("");
const done = ref(false);

onMounted(async () => {
  try {
    const resp = await axios.post(
      `${API_BASE_URL}/unsubscribe`,
      {
        id: userNotificationsId,
      },
      { timeout: 26000 }
    );
    if (resp.status !== 200) {
      error.value = true;
    }
  } catch (e: any) {
    console.error(e);
    error.value = true;
  }
  done.value = true;
});
</script>
