import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const createCheckoutSession = async (priceId) => {
    const stripe = await stripePromise;
    const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            priceId,
        }),
    });
    const session = await response.json();
    const result = await stripe.redirectToCheckout({
        sessionId: session.id,
    });
    if (result.error) {
        // Handle error
        console.error(result.error);
    }
};

export { createCheckoutSession };
