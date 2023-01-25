import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { createRoot } from 'react-dom/client';
import Application from './components/Application';
import theme from './components/theme';

// Application to Render
const app = (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Application />
  </ThemeProvider>
);

// Render application in DOM
createRoot(document.getElementById('app')).render(app);
