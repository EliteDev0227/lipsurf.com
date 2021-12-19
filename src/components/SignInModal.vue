<template>
  <v-dialog
    :value="show"
    @input="showUpdated"
    content-class="dialog"
    max-width="500px"
  >
    <v-card flat min-height="350px">
      <v-card-title content-class="header">
        Create Account or Sign In
      </v-card-title>
      <v-card-text>
        <SignIn
          @signed-in="
            $emit('signed-in');
            close();
          "
        ></SignIn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style>
@import "../../node_modules/firebaseui/dist/firebaseui.css";

.v-card__text {
  padding: 1em 0 !important;
}
.header {
  background: var(--seashell-color);
  color: var(--dark-text-color);
}
.dialog {
  background: var(--off-white);
}
</style>

<script lang="ts" setup>
import { SignIn } from "@lipsurf/common/components";

const emit = defineEmits(['update:show']);
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  }
})

// @Prop({ required: true })
// firebaseApp!: firebase.app.App;

function showUpdated(value: boolean) {
  emit("update:show", value);
}

function close() {
  emit("update:show", false);
}
</script>

