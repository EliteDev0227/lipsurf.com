<template>
    <div class="main">
        <h1>LipSurf Upgraded to <strong>v1.8</strong></h1>
        <div class="video-cont">
            <iframe src="https://www.youtube.com/embed/xkO0yji0IHY?modestbranding=1&hd=1&vq=hd720" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="footer">
            <div>
                <router-link :to="{name: 'updates'}">See the Full Release Notes → </router-link>
            </div>
            <div>
                <a href="https://discuss.lipsurf.com">Ask a Question → </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    margin-top: 1.5rem;
    opacity: 0;
    animation: fade-in 6s cubic-bezier(.04,.93,.46,.92) both;
}
.footer > div {
    margin: 0.7rem;
}
.footer a {
    color: white;
    transition: all 0.6s;
}
.footer a:hover {
    font-size: 1.1em;
}
h1 {
    color: white;
    margin-bottom: 2.5rem;
    font-weight: 200;
    letter-spacing: 0.1em;
    animation: tracking-in-expand 6s cubic-bezier(.04,.93,.46,.92) both;
}
.video-cont {
    box-shadow: 10px black;
}
.video-cont iframe {
    width: 1280px;
    height: 720px;
    box-shadow: #636363 1px 1px 19px 0px;
    animation: scale-in-center 2s ease-out both;
}

@media (max-width: 1280px) {
    .video-cont iframe {
        width: 1100px;
        height: 618.75px;
    }
}

@media (max-width: 1024px) {
    .video-cont iframe {
        width: 930px;
        height: 523.125px;
    }
}

@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.1em;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
    0% {
        opacity: 0;
    }
    30% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes colorchange {
  0% {
      background-position: 0% 0%;
  }
  100% {
      background-position: 0% 100%;
  }
}
.main {
    padding-top: 1.5rem;
    padding-bottom: 0;
    margin: 0;
    box-sizing: border-box;
    text-align: center;
    min-height: 100%;
    background: linear-gradient(180deg, #e2f6f8 0%,#36afbc);
	background-size: 400% 400%;
    animation: colorchange 3s ease 1 forwards;
}
@keyframes scale-in-center {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

</style>

<script lang="ts" setup>
import BaseLayout from './BaseLayout.vue';

</script>
