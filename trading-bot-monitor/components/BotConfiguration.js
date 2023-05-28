import { Box, Heading, Text, Stack, Switch, FormControl, FormLabel, Select, Button, useColorMode, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { useState } from 'react';

const BotConfiguration = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [config, setConfig] = useState({
    mode: "DEVELOPMENT",
    abortAllPositions: false,
    findCointegrated: true,
    manageExits: true,
    placeTrades: true,
    resolution: "1HOUR",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setConfig((prevConfig) => ({
      ...prevConfig,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpen();
  };

  const handleConfirm = () => {
    // Perform actions with the updated config
    saveConfiguration(config).then(() => {
      onClose();
      // Additional logic for deploying the bot
      deployBot();
    });
  };

  const saveConfiguration = (config) => {
    // Example: Simulating an API call to save the configuration
    // Replace this with your own implementation to save the configuration
    return new Promise((resolve, reject) => {
      // Simulating a delay to mimic an API call
      setTimeout(() => {
        console.log("Configuration saved:", config);
        resolve();
      }, 1000);
    });
  };

  const deployBot = () => {
    // Logic for deploying the bot
    console.log("Bot deployed!");
    // You can redirect or perform any additional actions here
  }; 

  return (
    <Box m={10} p={6} shadow="md" borderWidth="1px" borderRadius="md" bg={colorMode === 'dark' ? 'gray.900' : 'white'}>
      <Heading size="lg" mb={4} color={colorMode === 'dark' ? 'white' : 'gray.800'}>
        Bot Configuration
      </Heading>
      <Text mb={6} color={colorMode === 'dark' ? 'whiteAlpha.800' : 'gray.600'}>
        Configure the settings for your trading bot:
      </Text>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="mode" color={colorMode === 'dark' ? 'white' : 'gray.800'}>
              Mode
            </FormLabel>
            <Select id="mode" name="mode" value={config.mode} onChange={handleChange}>
              <option value="DEVELOPMENT">Development</option>
              <option value="PRODUCTION">Production</option>
            </Select>
          </FormControl>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="abortAllPositions" mb={0} color={colorMode === 'dark' ? 'white' : 'gray.800'}>
              Abort All Positions
            </FormLabel>
            <Switch
              id="abortAllPositions"
              name="abortAllPositions"
              isChecked={config.abortAllPositions}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="findCointegrated" mb={0} color={colorMode === 'dark' ? 'white' : 'gray.800'}>
              Find Cointegrated Pairs
            </FormLabel>
            <Switch
              id="findCointegrated"
              name="findCointegrated"
              isChecked={config.findCointegrated}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="manageExits" mb={0} color={colorMode === 'dark' ? 'white' : 'gray.800'}>
              Manage Exits
            </FormLabel>
            <Switch id="manageExits" name="manageExits" isChecked={config.manageExits} onChange={handleChange} />
          </FormControl>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="placeTrades" mb={0} color={colorMode === 'dark' ? 'white' : 'gray.800'}>
              Place Trades
            </FormLabel>
            <Switch id="placeTrades" name="placeTrades" isChecked={config.placeTrades} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="resolution" color={colorMode === 'dark' ? 'white' : 'gray.800'}>
              Resolution
            </FormLabel>
            <Select id="resolution" name="resolution" value={config.resolution} onChange={handleChange}>
              <option value="1MIN">1 Minute</option>
              <option value="5MINS">5 Minutes</option>
              <option value="15MINS">15 Minutes</option>
              <option value="1HOUR">1 Hour</option>
              <option value="4HOURS">4 Hours</option>
              <option value="1DAY">1 Day</option>
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Confirm Deployment
          </Button>
        </Stack>
      </form>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Bot Deployment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to deploy the bot?</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="green" onClick={handleConfirm}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default BotConfiguration;
