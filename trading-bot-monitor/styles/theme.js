import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: (props) => ({
            body: {
                bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.100',
                color: props.colorMode === 'dark' ? 'white' : 'gray.800',
            },
        }),
    },
    components: {
        Button: {
            variants: {
                primary: (props) => ({
                    bg: props.colorMode === 'dark' ? 'teal.500' : 'teal.300',
                    color: 'white',
                    _hover: {
                        bg: props.colorMode === 'dark' ? 'teal.600' : 'teal.400',
                    },
                }),
            },
        },
        Navbar: {
            baseStyle: (props) => ({
                bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.200',
                color: props.colorMode === 'dark' ? 'white' : 'gray.800',
                borderBottomWidth: '1px',
                borderBottomColor: props.colorMode === 'dark' ? 'gray.600' : 'gray.300',
            }),
        },
    },
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    fonts: {
        body: 'Roboto, sans-serif',
        heading: 'Roboto, sans-serif',
    },
    breakpoints: {
        sm: '30em', // 480px
        md: '48em', // 768px
        lg: '62em', // 992px
        xl: '80em', // 1280px
    },
});

export default theme;
