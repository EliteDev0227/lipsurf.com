<template>
    <figure ref="headerAnim">
        <img src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 975 562'%2F%3E">
    </figure>
</template>

<style scoped>
figure {
  text-align: center;
  pointer-events: none;
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
</style>

<script lang="ts" setup>
import lottie from "lottie-web";
import { onMounted, ref, onBeforeUnmount, nextTick } from "vue";

let curProportion: number = 0;
let anim: any; // lottie animation

const props = defineProps({
    name: {
        type: String,        
        required: true
    }
})

const headerAnim = ref<HTMLDivElement>(null);

onMounted(() => {
    windowWidthListener(null, true);
    nextTick(() => {
        window.addEventListener('resize', windowWidthListener);
    });
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', windowWidthListener);
})

function getImageProportion(width: number) {
    if (width > 2200)
        return 4;
    else if (width > 1195)
        return 2;
    return 1;
}

function windowWidthListener(evt: Event|null, first: boolean = false) {
    const newVal = window.innerWidth;
    const newProportion = getImageProportion(newVal);
    console.log(`newVal: ${newVal} newProportion: ${newProportion}`);
    if (!curProportion || newProportion > curProportion) {
        loadAnimation(newProportion, first);
    }
    curProportion = newProportion;
}

function loadAnimation(proportion: number, first: boolean = false) {
    console.log('reloading anim with ' + proportion);
    if (anim)
        anim.destroy();

    if (!window.__PRERENDER_INJECTED?.isPrerendering) {
        anim = lottie.loadAnimation({
            container: headerAnim.value,
            path: `/assets/anim/${props.name}${proportion > 1 ? '-' + proportion + 'x' : ''}.json`,
            renderer: "svg",
            loop: true,
            autoplay: true,
        });
    }

    if (first) {
        // hack to clear initial frame
        anim.addEventListener('data_ready', () => {
            headerAnim.value.removeChild(headerAnim.value.firstChild!);
        });
    }
}
</script>