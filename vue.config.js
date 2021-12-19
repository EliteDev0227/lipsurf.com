const PrerenderSpaPlugin = require('prerender-spa-plugin');
const path = require('path');
const cheerio = require('cheerio');
const SizePlugin = require('size-plugin');
const Renderer = PrerenderSpaPlugin.PuppeteerRenderer;
const DefinePlugin = require('webpack').DefinePlugin;


const IS_PROD = process.env.NODE_ENV === 'production';

const bodyHTML = `
  <script>
    WebFontConfig = { google: { families: ['Barlow:300,500'],  } };
    (function(d) {
      var wf = d.createElement('script'), s = d.scripts[0];
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
      wf.async = true;
      wf.onload = webfontReadyHandler;
      s.parentNode.insertBefore(wf, s);
   })(document);
  </script>
`;

const headHTML = `
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-125087271-1"></script>
  <script>
    window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'UA-125087271-1');

    window.stripeReadyPromise = new Promise(function (resolve, reject) {
      window.stripeReadyResolver = resolve;
    });
    function stripeReadyHandler() {
      window.stripeReadyResolver();
    }
    window.webfontReadyPromise = new Promise(function (resolve, reject) {
      window.webfontReadyResolver = resolve;
    });
    function webfontReadyHandler() {
      window.webfontReadyResolver();
    }
  </script>
  <script src="https://js.stripe.com/v3/" async onload="stripeReadyHandler()"></script>
  <!-- Facebook Pixel Code -->
  <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1630316643768986');
    fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=284475822428929&ev=PageView&noscript=1"
  /></noscript>
  <!-- End Facebook Pixel Code -->
`;


module.exports = {
  // lintOnSave: false,
  pluginOptions: {
    webpackBundleAnalyzer: {
      // openAnalyzer: true,
      // analyzerMode: 'server',
      openAnalyzer: false,
      analyzerMode: 'disabled',
    },
    vuetify: {

    }
  },
  chainWebpack: config => {
    // this fixes issues with having vuetify deps in @lipsurf/common components
    // config.resolve.symlinks(false)

    // prevent double inclusion
    // config.resolve.alias
    //   .set('vue$', 'vue/dist/vue.runtime.esm.js')
    //   .set('^vuetify', path.resolve(__dirname, 'node_modules/vuetify'))
      // .set('firebase/firestore', 'firebase/firestore/dist/index.esm.js')
      // .set('firebase/app', 'firebase/app/dist/index.esm.js')
      // .set('firebase/auth', 'firebase/auth/dist/index.esm.js')
      // .set('firebase', 'firebase')
      ;
    // const svgRule = config.module.rule('svg');

    // svgRule.uses.clear();

    // svgRule
    //   .use('vue-loader')
    //   .loader('vue-loader-v16')
    //   .end()
    //   .use('vue-svg-loader')
    //   .loader('vue-svg-loader');

    config
      .plugin('define')
      .tap(args => {
          args[0] = {
             ...args[0],
            ...[
              'STRIPE_API_KEY',
              'FIREBASE_API_KEY',
              'AMPLITUDE_KEY',
            ].reduce((memo, val) => ({...memo, [`process.env.${val}`]: JSON.stringify(process.env[val])}), {}),
          }
          console.log('args', args)
          return args
       })
    
    config.optimization.minimizer('terser').tap((args) => {
      args[0].terserOptions.compress.drop_console = IS_PROD
      return args
    })
  },
  // configureWebpack: config => {
  //   if (IS_PROD) {
  //     return {
  //       plugins: [
  //         // new SizePlugin({
  //         //   filename: 'size-plugin.json',
  //         //   writeFile: true,
  //         //   stripHash: (filename) => {
  //         //     if (filename.endsWith('.css')) {
  //         //       const splitted = filename.split('.');
  //         //       console.log('filename', filename, splitted);
  //         //       return splitted.slice(0, splitted.length - 2).join('.') + '.********.css' 
  //         //     }
  //         //   },
  //         // }),
  //         definePlugin,
  //         new PrerenderSpaPlugin({
  //           staticDir: path.resolve(__dirname, 'dist/'),
  //           // all of the routes to prerender
  //           routes: ['/', '/pricing', '/contact', '/updates', 
  //                   '/tos', '/privacy', '/uninstall', '/404', 
  //                   '/5xx', '/updates/1-8-0', '/notifications/unsubscribe',
  //                   '/settings/plan', '/login',
  //                   '/dragon-naturally-speaking-alternative',
  //                   '/enterprise'],
  //           postProcess: function(context) {
  //             let $ = cheerio.load(context.html);
  //             $('head').append(headHTML);
  //             $('body').append(bodyHTML);
  //             context.html = $.html();
  //             return context;
  //           },
  //           renderer: new Renderer({
  //             // Optional - The name of the property to add to the window object with the contents of `inject`.
  //             injectProperty: '__PRERENDER_INJECTED',
  //             // Optional - Any values you'd like your app to have access to via `window.injectProperty`.
  //             inject: {
  //               isPrerendering: true 
  //             },
  //           }),
  //           minify: {
  //             collapseBooleanAttributes: true,
  //             collapseWhitespace: true,
  //             decodeEntities: true,
  //             minifiyCSS: true,
  //             removeComments: true,
  //             keepClosingSlash: true,
  //             sortAttributes: true
  //           },
  //         })
  //     ]};
  //   }
  // }
}
