// pages/dashboard.tsx
import React, { useState } from 'react';
import {Button, Typography, Switch, ThemeProvider, Paper} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '../theme';

const Dashboard: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
                <CssBaseline />
                <Paper elevation={24}>
                    <Typography variant="h4">Dashboard</Typography>
                    <Switch
                        checked={darkMode}
                        onChange={toggleDarkMode}
                        color="primary"
                    />
                    <Typography variant="body1">
                        Dark Mode: {darkMode ? 'On' : 'Off'}
                    </Typography>
                </Paper>
        </ThemeProvider>
    );
};

export default Dashboard;
