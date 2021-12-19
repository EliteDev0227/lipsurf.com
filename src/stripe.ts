import { STRIPE_API_KEY } from "@lipsurf/common/constants";

let stripe: stripe.Stripe;
export async function getStripe() {
    if (!stripe) {
        await window.stripeReadyPromise;
        stripe = window.Stripe(STRIPE_API_KEY!);
    }
    return stripe;
}