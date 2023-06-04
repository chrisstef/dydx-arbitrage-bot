import { useState } from 'react';
import { Box, Button, Container, Heading, Stack } from '@chakra-ui/react';
import { createCheckoutSession } from '../utils/stripe';
import { Navbar } from "../components"

const Subscription = () => {
    const [loading, setLoading] = useState(false);

    const handleSubscription = async (priceId) => {
        setLoading(true);
        await createCheckoutSession(priceId);
        setLoading(false);
    };

    return (
        <div>
            <Navbar />
            <Box py={8}>
                <Container maxW="container.md">
                    <Box p={6} borderRadius="md" shadow="md">
                        <Heading as="h1" mb={6} textAlign="center">
                            Subscription Plans
                        </Heading>
                        <Stack spacing={6}>
                            <Box borderWidth={1} borderRadius="md" p={6}>
                                <Heading as="h2" fontSize="2xl" mb={4}>
                                    Freemium Plan
                                </Heading>
                                <p>Basic features</p>
                                <Button
                                    onClick={() => handleSubscription('YOUR_FREEMIUM_PRICE_ID')}
                                    isLoading={loading}
                                    mt={6}
                                    colorScheme="teal"
                                    variant="solid"
                                    size="lg"
                                    isFullWidth
                                >
                                    Select Freemium
                                </Button>
                            </Box>
                            <Box borderWidth={1} borderRadius="md" p={6}>
                                <Heading as="h2" fontSize="2xl" mb={4}>
                                    Premium Plan
                                </Heading>
                                <p>Advanced features</p>
                                <Button
                                    onClick={() => handleSubscription('YOUR_PREMIUM_PRICE_ID')}
                                    isLoading={loading}
                                    mt={6}
                                    colorScheme="teal"
                                    variant="solid"
                                    size="lg"
                                    isFullWidth
                                >
                                    Select Premium
                                </Button>
                            </Box>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </div>
    );
};

export default Subscription;
