import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  TextField,
  MenuItem,
  Box,
  AppBar,
  Button,
  Toolbar,
  Typography,
  Fab,
  Container,
  Checkbox,
  ButtonGroup,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import useUser from '@src/effects/UseUser';
import { getUserPrimaryColor } from '@src/services/ThemeService';
import useAsyncEffect from 'use-async-effect';

export default function ThemeComponent() {
  const { user, setPrimaryColor } = useUser();

  useAsyncEffect(async () => {
    let userEmailLocal = localStorage.getItem('userEmail');
    if (userEmailLocal) {
      return await getUserPrimaryColor(userEmailLocal);
    }

    const userEmail = prompt(
      'Please enter email default is (divek@email.com)',
      'divek@email.com',
    );
    localStorage.setItem('userEmail', userEmail);
    await getUserPrimaryColor(userEmail);
  }, []);

  if (user.primaryTheme === undefined) {
    return null;
  }

  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          primary: { main: user.primaryTheme },
        },
      })}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Theme Changing app
            </Typography>
            <Box m={2}>
              <TextField
                select
                sx={{ width: 100 }}
                label='Primary color'
                defaultValue={user.primaryTheme}
                onChange={(e) => setPrimaryColor(e.target.value)}
              >
                <MenuItem value='#00ea8d'>Aurora</MenuItem>
                <MenuItem value='#B41FFE'>Purple</MenuItem>
                <MenuItem value='#009999'>Viridian green</MenuItem>
              </TextField>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth='xl' sx={{ pt: 2 }}>
        <TextField />
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
        <Checkbox defaultChecked />
        <ButtonGroup
          variant='contained'
          aria-label='outlined primary button group'
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Container>
    </ThemeProvider>
  );
}
