'use client';

import { Box, Flex, Heading, Table, Thead, Tbody, Tr, Th, Td, useColorMode, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Skeleton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const OpenPositions = () => {
    const { colorMode } = useColorMode();
    const [positions, setPositions] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await axios.get('/bot_agents.json');
            const data = response.data;
            setPositions(data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching positions:', error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();

        const interval = setInterval(() => {
            fetchData();
        }, 5000); // Fetch data every 5 seconds

        return () => {
            clearInterval(interval);
        };
    }, []);

    const handlePositionClick = (position) => {
        setSelectedPosition(position);
        onOpen();
    };

    if (isLoading) {
        return (
            <Flex justify="center" align="center" h="100vh">
                <Box>
                    <Skeleton height="20px" my={2} />
                    <Skeleton height="20px" my={2} />
                    <Skeleton height="20px" my={2} />
                </Box>
            </Flex>
        );
    }

    if (positions.length === 0) {
        return (
            <Box m={10} p={6} shadow="md" borderWidth="1px" borderRadius="lg" bg={colorMode === 'dark' ? 'gray.900' : 'white'}>
                <Heading size="lg" color={colorMode === 'dark' ? 'white' : 'gray.800'}>
                    No active trades
                </Heading>
            </Box>
        );
    }

    return (
        <Box m={10} p={6} shadow="md" borderWidth="1px" borderRadius="lg" bg={colorMode === 'dark' ? 'gray.900' : 'white'}>
            <Flex justifyContent="space-between" alignItems="center" mb={4}>
                <Heading size="lg" color={colorMode === 'dark' ? 'white' : 'gray.800'}>
                    Open Positions
                </Heading>
                <Heading size="sm" color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}>
                    Total Positions: {positions.length}
                </Heading>
            </Flex>
            <Table variant="striped" colorScheme={colorMode === 'dark' ? 'gray' : 'gray'} borderRadius="md">
                <Thead>
                    <Tr>
                        <Th>Market 1</Th>
                        <Th>Market 2</Th>
                        <Th display={{ base: 'none', lg: 'table-cell' }}>Hedge Ratio</Th>
                        <Th display={{ base: 'none', lg: 'table-cell' }}>Z-Score</Th>
                        <Th display={{ base: 'none', lg: 'table-cell' }}>Half Life</Th>
                        <Th display={{ base: 'none', lg: 'table-cell' }}>Order Size (M1)</Th>
                        <Th display={{ base: 'none', lg: 'table-cell' }}>Order Size (M2)</Th>
                        <Th>Pair Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {positions.map((position, index) => (
                        <Tr
                            key={index}
                            bg={colorMode === 'dark' ? (index % 2 === 0 ? 'gray.700' : 'gray.800') : (index % 2 === 0 ? 'gray.50' : 'white')}
                            _hover={{ bg: colorMode === 'dark' ? 'gray.600' : 'gray.100' }}
                            cursor="pointer"
                            onClick={() => handlePositionClick(position)}
                            borderRadius="md"
                        >
                            <Td>{position.market_1}</Td>
                            <Td>{position.market_2}</Td>
                            <Td display={{ base: 'none', lg: 'table-cell' }}>{position.hedge_ratio}</Td>
                            <Td display={{ base: 'none', lg: 'table-cell' }}>{position.z_score}</Td>
                            <Td display={{ base: 'none', lg: 'table-cell' }}>{position.half_life}</Td>
                            <Td display={{ base: 'none', lg: 'table-cell' }}>{position.order_m1_size}</Td>
                            <Td display={{ base: 'none', lg: 'table-cell' }}>{position.order_m2_size}</Td>
                            <Td>{position.pair_status}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>

            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent borderRadius="lg">
                    <ModalHeader>Position Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {selectedPosition && (
                            <Box>
                                <Heading size="md" mb={4}>
                                    Market 1: {selectedPosition.market_1}
                                </Heading>
                                <Heading size="md" mb={4}>
                                    Market 2: {selectedPosition.market_2}
                                </Heading>
                                <Heading size="md" mb={4}>
                                    Pair Status: {selectedPosition.pair_status}
                                </Heading>
                                {/* Display additional details here */}
                            </Box>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default OpenPositions;
