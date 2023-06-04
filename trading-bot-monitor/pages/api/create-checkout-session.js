import { stripe } from '../../utils/stripe';

export default async function handler(req, res) {
    const { priceId } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cancel`,
        });

        res.status(200).json({ id: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error.message);
        res.status(500).json({ error: 'Unable to create checkout session.' });
    }
}
