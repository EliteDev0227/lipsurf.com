// Plans
import { FREE_PLAN, PLUS_PLAN, PREMIUM_PLAN } from '@lipsurf/common/constants';

// @ts-ignore
export const PLAN_TO_PRICE: Record<plan, Record<Term, number>> = {
    [FREE_PLAN]: {
        monthly: 0,
        yearly: 0,
    },
    [PLUS_PLAN]: {
        monthly: 400,
        yearly: 3600,
    },
    [PREMIUM_PLAN]: {
        monthly: 800,
        yearly: 7200,
    },
};
