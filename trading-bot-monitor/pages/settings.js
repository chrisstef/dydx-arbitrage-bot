'use client';

import { Navbar } from "../components";
import { useState } from "react";
import {
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    useColorMode,
    useTheme,
} from "@chakra-ui/react";

export default function Settings() {
    const [newUsername, setNewUsername] = useState("");
    const [tradingAccount, setTradingAccount] = useState("");
    const { colorMode } = useColorMode();
    const theme = useTheme();

    const handleUsernameChange = (event) => {
        setNewUsername(event.target.value);
    };

    const handleTradingAccountChange = (event) => {
        setTradingAccount(event.target.value);
    };

    const handleUpdateSettings = () => {
        // Implement the logic to update the settings here
        // You can use the updated values from `newUsername` and `tradingAccount` state variables
    };

    return (
        <div>
            <Navbar />
            <Box m={10} p={6} shadow="md" borderWidth="1px" borderRadius="md">
                <Heading size="lg" mb={4}>
                    Settings
                </Heading>
                <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Box display="flex">
                        <Input
                            value={newUsername}
                            onChange={handleUsernameChange}
                            placeholder="Enter your new username"
                        />
                        <Button
                            onClick={handleUpdateSettings}
                            bg={
                                colorMode === "dark"
                                    ? theme.colors.teal[500]
                                    : theme.colors.teal[300]
                            }
                            color="white"
                            _hover={{
                                bg:
                                    colorMode === "dark"
                                        ? theme.colors.teal[600]
                                        : theme.colors.teal[400],
                            }}
                        >
                            Update
                        </Button>
                    </Box>
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Trading Account</FormLabel>
                    <Box display="flex">
                        <Input
                            value={tradingAccount}
                            onChange={handleTradingAccountChange}
                            placeholder="Enter your trading account"
                        />
                    </Box>
                </FormControl>
            </Box>
        </div>
    );
}
