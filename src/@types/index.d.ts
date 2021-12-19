
type FrontendCoupon = InvalidFrontendCoupon | ValidFrontendCoupon;

interface ValidFrontendCoupon {
	valid: true;
	name: string;
	yearlyCents: number;
	yearlyPriceDesc: string;
}

interface InvalidFrontendCoupon {
	valid: false;
	invalidReason: string;
	id: string;
}