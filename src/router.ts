import { createRouter, createWebHistory } from 'vue-router';
import Landing from './views/Landing.vue';

const BRAND = "LipSurf";
const DEFAULT_TITLE = `Voice Control for the Browser | ${BRAND}`;
const DEFAULT_DESC = "Voice commands and shortcuts for the browser. Eat in front of your computer while controlling it via voice. Great for those with motor issues (parkinson's, arthritis, RSI etc.).";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior (to, from, savedPosition) {
    return {left: 0, top: 0};
  },
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
    {
      path: '/enterprise',
      name: 'enterprise',
      meta: {
        title: 'LipSurf for Business'
      },
      component: () => import(/* webpackChunkName: "enterprise" */ './views/Enterprise.vue'),
    },
    {
      path: '/pricing',
      name: 'pricing',
      meta: {
        title: 'Pricing',
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "pricing" */ './views/Pricing.vue'),
    },
    {
      path: '/upgrade',
      name: 'upgrade',
      meta: {
        title: 'Upgrade Finished',
      },
      component: () => import(/* webpackChunkName: "upgrade" */ './views/SubscriptionUpgradeFinished.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {
        title: 'Contact Us',
      },
      component: () => import(/* wepackChunkName: "contact" */ './views/Contact.vue'),
    },
    {
      path: '/tos',
      name: 'tos',
      meta: {
        title: 'Terms of Service',
      },
      component: () => import(/* webpackChunkName: "tos" */ './views/TOS.vue'),
    },
    {
      path: '/privacy',
      name: 'privacy',
      meta: {
        title: 'Privacy Policy',
      },
      component: () => import(/* webpackChunkName: "privacy" */ './views/Privacy.vue'),
    },
    {
        path: '/updates',
        name: 'updates',
        meta: {
          title: 'Updates',
        },
      component: () => import(/* webpackChunkName: "updates" */ './views/Updates.vue'),
    },
    {
        path: '/updates/1-8-0',
        meta: {
          title: 'LipSurf Has Been Updated to v1.8!'
        },
      component: () => import(/* webpackChunkName: "updates" */ './views/FeaturedUpdate.vue'),
    },
    {
      path: '/uninstall',
      name: 'uninstall',
      meta: {
        title: 'Uninstall',
      },
      component: () => import(/* webpackChunkName: "uninstall" */ './views/Uninstall.vue'),
    },
    {
      path: '/dragon-naturally-speaking-alternative',
      name: 'dragon',
      meta: {
        title: 'Dragon NaturallySpeaking Alternative - LipSurf vs. Dragon NaturallySpeaking',
        'article:publisher': "https://www.facebook.com/lipsurfapp/",
        'article:modified_time': "2021-03-26T11:11:09.000+11:00",
        "article:published_time": "2020-01-27T15:02:23.000+11:00",
      },
      component: () => import(/* webpackChunkName: "dragon" */ './views/DragonComparison.vue'),
    },
    {
      path: '/notifications/unsubscribe',
      meta: {
        title: 'Unsubscribe from Notifications',
      },
      component: () => import(/* webpackChunkName: "unsubscribe" */ './views/NotificationsUnsubscribe.vue'),
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: 'Login',
      },
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
    },
    {
      path: '/settings/plan',
      name: 'settings',
      meta: {
        title: 'Plan Settings',
      },
      component: () => import(/* webpackChunkName: "settings" */ './views/PlanSettings.vue'),
    },
    {
      path: '/5xx',
      name: '5xx',
      meta: {
        title: 'Error',
      },
      component: () => import(/* webpackChunkName: "5xx" */ './views/Error5xx.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      meta: {
        title: 'Not Found',
      },
      component: () => import(/* webpackChunkName: "404" */ './views/Error404.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} | ${BRAND}` : DEFAULT_TITLE;
  const desc = document.createElement('meta');
  desc.name = 'description';
  // @ts-ignore
  desc.content = to.meta.description || DEFAULT_DESC;
  document.head!.appendChild(desc);

  const otherMetaProps = Object.keys(to.meta).filter(x => ['title', 'desc'].includes(x));
  for (const metaP of otherMetaProps) {
    const metaEl = document.createElement('meta');
    // @ts-ignore
    metaEl.property = metaP;
  // @ts-ignore
    metaEl.content = to.meta[metaP];
    document.head!.appendChild(metaEl);
  }

  // future
  // if (to.matched.find(record => record.meta.requiresAuth)) {
  //   if (!store.getters.isAuthenticated) {
  //     // what is fullPath?
  //     next(`/login?next=${to.path}`);
  //   }
  // }
  next();
});

export default router;