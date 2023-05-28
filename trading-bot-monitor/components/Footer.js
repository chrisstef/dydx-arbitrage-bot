import { Box, useColorMode } from '@chakra-ui/react';

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Box p={4} bg={colorMode === 'dark' ? 'gray.900' : 'gray.100'} color={colorMode === 'dark' ? 'white' : 'gray.800'} textAlign="center" mt="auto">
      KAI | All rights reserved
    </Box>
  );
};

export default Footer;
