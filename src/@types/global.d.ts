/// <reference types="@lipsurf/common"/>
export {};

declare global {
    interface Window {
        stripeReadyPromise: Promise<void>;
        Stripe: stripe.StripeStatic;
        authUi: firebaseui.auth.AuthUI|null;
        firebase: any;
        firebaseApp: firebase.app.App;
        __PRERENDER_INJECTED?: {
            isPrerendering: true
        };
    }
}