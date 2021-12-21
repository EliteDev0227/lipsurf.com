<template>
  <div>
    <v-overlay v-model="drawer">
    </v-overlay>
    <v-navigation-drawer
      fixed
      app
      v-model="drawer"
      disable-resize-watcher
      class="side-nav"
    >
      <v-list>
        <v-list-item :to="{ name: 'landing' }">
          <v-list-item-header>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-header>
        </v-list-item>
        <template v-for="item in menu">
          <v-list-item
            v-if="item.internal"
            :to="{ name: item.link }"
            :key="item.name"
          >
            <v-list-item-header>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-header>
          </v-list-item>
          <v-list-item v-else :href="'https://' + item.link" :key="item.name">
            <v-list-item-header>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-header>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat color="transparent" absolute>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
        alt="navigation drawer"
      ></v-app-bar-nav-icon>

      <router-link
        :to="{ name: 'landing' }"
        title="LipSurf Home"
        class="logo hidden-sm-and-down"
      ></router-link>
      <v-app-bar-title>
        <router-link :to="{ name: 'landing' }">LipSurf</router-link>
      </v-app-bar-title>
      <v-spacer></v-spacer>

      <div class="hidden-sm-and-down">
        <div class="d-flex flex-row">
          <template v-for="item in menu">
            <router-link
              class="nav-hor-a"
              v-if="item.internal"
              :key="item.name"
              :to="{ name: item.link }"
              >{{ item.name }}</router-link
            >
            <a
              class="nav-hor-a"
              v-else
              :key="item.name"
              :href="'https://' + item.link"
              >{{ item.name }}</a
            >
          </template>
        </div>
      </div>
    </v-app-bar>

    <!-- padded the size of the app-bar -->
    <v-main style="overflow-x: hidden; padding-top: 64px">
      <slot />
      <slot name="outer" />
    </v-main>

    <footer class="mute">
      <div class="links">
        <section>
          <div>
            <h5>Product</h5>
            <router-link
              :to="{ name: 'dragon' }"
              v-if="$route.name !== 'dragon'"
              >Comparison with Dragon NaturallySpeaking</router-link
            >
            <router-link
              :to="{ name: 'updates' }"
              v-if="$route.name !== 'updates'"
              >What's New</router-link
            >
            <router-link
              :to="{ name: 'enterprise' }"
              v-if="$route.name !== 'enterprise'"
              >Enterprise</router-link
            >
            <a href="https://help.lipsurf.com">Help</a>
            <router-link
              :to="{ name: 'pricing' }"
              v-if="$route.name !== 'pricing'"
              >Pricing</router-link
            >
          </div>
        </section>
        <section>
          <div>
            <h5>Developers</h5>
            <a href="https://blog.lipsurf.com">Documentation</a>
            <a href="https://github.com/lipsurf">Github</a>
            <a href="https://discuss.lipsurf.com/c/plugin-development"
              >Support</a
            >
          </div>
        </section>
        <section>
          <div>
            <h5>Company</h5>
            <a href="https://blog.lipsurf.com">Blog</a>
            <router-link :to="{ name: 'contact' }">Contact Us</router-link>
            <router-link :to="{ name: 'privacy' }">Privacy</router-link>
          </div>
        </section>
      </div>
      <div id="fb-root"></div>
      <div
        class="fb-like"
        data-href="https://www.facebook.com/lipsurfapp"
        data-layout="standard"
        data-action="like"
        data-show-faces="true"
      ></div>
      <div style="margin: 2em">&copy; 2021 LipSurf Inc.</div>
    </footer>
  </div>
</template>

<style>
.v-overlay {
  z-index: 50 !important;
}
/* 1080 looks good but code on /enterprise page needs a bit more space to fit on one line */
.container.maxed {
  max-width: 1130px;
}
</style>
<style scoped>
.logo {
  margin-right: 0.5em;
}
.nav-hor-a {
  padding: 0.5em 1.5em;
  display: flex;
  align-items: center;
  font-weight: 500;
}
footer a {
  text-decoration: none;
}
footer .links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
}
footer h5 {
  margin: 0;
}
footer .links section {
  margin: 0 2em;
}
footer .links section div {
  flex: 1;
  display: flex;
  text-align: left;
  flex-direction: column;
  margin: 2em auto;
}
@media (max-width: 600px) {
  footer .links {
    display: block;
  }
}
.side-nav {
  z-index: 60 !important;
}
</style>

<script lang="ts" setup>import { ref, onMounted } from 'vue';


let drawer = ref(false);
const menu = [
  { internal: true, link: "updates", name: "What's New" },
  { internal: true, link: "pricing", name: "Get Premium" },
  { internal: false, link: "docs.lipsurf.com", name: "Developers" },
  { internal: false, link: "discuss.lipsurf.com", name: "Forum" },
];

  onMounted(() => {
    // don't do this on prerender, because it increases the sync size of the html unnecessarily
    if (!window.__PRERENDER_INJECTED?.isPrerendering) {
      (function(d, id) {
        if (!document.getElementById(id)) {
          var js: HTMLScriptElement,
            fjs = d.getElementsByTagName("script")[0];
          if (d.getElementById(id)) return;
          js = d.createElement("script");
          js.id = id;
          js.src =
            "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
          fjs.parentNode!.insertBefore(js, fjs);
        } else {
          // @ts-ignore
          FB.XFBML.parse();
        }
      })(document, "facebook-jssdk");
    }
  }
);
</script>

