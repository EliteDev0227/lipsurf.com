<template>
  <v-app>
    <router-view />
  </v-app>
</template>
<style>
@import "@lipsurf/common/base.css";
body {
  margin: 0;
  padding: 0;
  color: #11383c;
  background: var(--off-white);
}

/* @font-face {
  font-family: "LipSurf";
  font-style: normal;
  src: url(/fonts/LipSurf.ttf) format("truetype");
} */

.light {
  font-weight: 300;
}

.logo {
  background-image: url(./assets/img/icon-128.png);
  background-size: contain;
  background-repeat: no-repeat;
  width: 45px;
  height: 45px;
}

/* base.css a is overriden because vuetity has it's own anchor style with more specificity */
.v-application a:hover {
  color: var(--primary-color);
}

/* base.css a is overriden because vuetity has it's own anchor style with more specificity */
.v-application a {
  font-weight: 500;
}

a.btn:hover {
  color: white;
}

a.btn.hollow:hover {
  color: var(--primary-color);
}

.btn:hover {
  background-color: #3fd0e1;
}

.btn.hollow {
  /*border: 1px solid var(--primary-color);*/
  background-color: #fefefe;
  color: var(--dark-primary-color);
}

.mute {
  color: var(--dark-mute-color);
}
.more-mute {
  color: var(--more-dark-mute-color);
}
.light-mute {
  color: var(--mute-color);
}

footer {
  margin: 50px auto 50px auto;
  text-align: center;
  color: #999;
}

/* overrides needed because of the css reset (brought about by vuetify) */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 1em;
  margin-top: 1em;
}

.circular-photo {
  width: 40px;
  height: 40px;
  border: 3px solid white;
  box-shadow: 0 5px 5px 0 rgba(50, 50, 50, 0.15);
  border-radius: 50%;
}

blockquote {
  margin: auto 0.5em;
  box-shadow: 0 1px 1px 1px rgba(50, 50, 50, 0.1);
}

blockquote > div {
  margin: 0 auto;
  position: relative;
  padding: 1em;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
}

blockquote .profile::after {
  content: "“";
  color: var(--primary-color);
  font-family: "Times New Roman", Times, serif;
  position: relative;
  left: 0.1em;
  top: 0.5em;
  line-height: 1;
  font-size: 3em;
}

blockquote .profile {
  position: relative;
  top: -0.8em;
  left: -0.5em;
}
</style>