import { useState } from 'react';
import Link from 'next/link';
import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Spacer,
    IconButton,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems="center" justifyContent="space-between">
                    <Box fontSize="xl" fontWeight="bold" cursor="pointer">
                        <Link href="/">DYDX | Arbitrage Bot</Link>
                    </Box>

                    <Flex alignItems="center">
                        <Stack direction="row" spacing={7}>
                            <Flex align="center">
                                <Spacer />
                                <IconButton
                                    aria-label="Toggle Theme"
                                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                    onClick={toggleColorMode}
                                    variant="ghost"
                                />
                            </Flex>

                            <Menu isOpen={isOpen} onOpen={handleMenuToggle} onClose={handleMenuToggle}>
                                <MenuButton
                                    as={Button}
                                    rounded="full"
                                    variant="link"
                                    cursor="pointer"
                                    minW={0}
                                >
                                    <Avatar
                                        size="sm"
                                        src="https://avatars.dicebear.com/api/male/username.svg"
                                    />
                                </MenuButton>
                                <MenuList alignItems="center">
                                    <br />
                                    <Center>
                                        <Avatar
                                            size="2xl"
                                            src="https://avatars.dicebear.com/api/male/username.svg"
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>
                                        <Link href="/positions">Your Positions</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link href="/settings">Account Settings</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link href="/logout">Logout</Link>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
