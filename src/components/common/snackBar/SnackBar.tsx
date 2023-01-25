import { Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import useAsyncEffect from 'use-async-effect';
import React from 'react';
import { SnackbarMessage, snackbarMessageStream } from './SnackBarService';

interface SnackBar {
  open: boolean;
  message:  React.ReactElement;
  actions?: React.ReactElement;
  timeOut: number;
}

export default function Snack() {
  const [snackBar, setSnackBar] = React.useState<SnackBar>({
    open: false,
    message: <></>,
    timeOut: 1000,
  });

  const { open, message, actions, timeOut } = snackBar;

  const handleClose = () => {
    setSnackBar({ ...snackBar, open: false });
  };

  useAsyncEffect(
    () => {
      return snackbarMessageStream.subscribe({
        next: (message: SnackbarMessage) => {
            setSnackBar({ ...snackBar, ...message, open: true });
        },
        error: console.error,
      });
    },
    (snackbarMessageStream) => snackbarMessageStream.unsubscribe(),
    [],
  );

  return (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={timeOut || 1000}
        onClose={handleClose}
        message= {message}
        action={
          actions || (
            <React.Fragment>
              <IconButton
                size='small'
                aria-label='close'
                color='error'
                onClick={handleClose}
              >
                <CloseIcon fontSize='small' />
              </IconButton>
            </React.Fragment>
          )
        }
      />
    </React.Fragment>
  );
}
