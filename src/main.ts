import 'vuetify/styles';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
// import VueScrollReveal from 'vue-scroll-reveal';
// https://cli.vuejs.org/guide/browser-compatibility.html#usebuiltins-usage

// Vue.config.productionTip = false;

const app = createApp(App);

app.use(router);
app.use(vuetify);
// app.use(VueScrollReveal, {
//   distance: '100px'
// });
app.mount('#app');

import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import {firebaseConfig} from '@lipsurf/common/auth';

// TODO: handle when this is undefined? When disconnected.
console.log('initializing firebase');
try {
    window.firebaseApp = firebase.initializeApp(firebaseConfig);
} catch (e: any) {
    if (e.code === 'auth/network-request-failed') {
        // not connected
        console.warn('Firebase is not connected');
    } else {
        throw e;
    }
}

import * as firebaseui from "firebaseui";
// firebaseui.auth.AuthUI.getInstance()
window.authUi = new firebaseui.auth.AuthUI(window.firebaseApp.auth());
window.firebase = firebase;