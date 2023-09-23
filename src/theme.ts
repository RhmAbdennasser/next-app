// theme.ts
import { createTheme } from '@mui/material/styles';

// Define your primary and secondary colors here
const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#007ACC',
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9', // Example dark mode primary color
        },
    },
});

export { lightTheme, darkTheme };
