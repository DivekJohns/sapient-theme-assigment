import { Alert, AlertTitle, Box, Button, Container } from '@mui/material';
import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

function ErrorFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <Container maxWidth='xl' style={{ marginTop: 20 }}>
      <Box
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
        minHeight='80vh'
        marginTop='calc(10em - 20vh)'
      >
        <Alert
          severity='error'
          sx={{ p: 10 }}
          action={
            <Button
              variant='outlined'
              style={{ border: 0 }}
              onClick={resetErrorBoundary}
            >
              Click here to refresh
            </Button>
          }
        >
          <AlertTitle>Something unexpected happened !</AlertTitle>
        </Alert>
      </Box>
    </Container>
  );
}

export default function CatchComponentErrors({
  children,
}: React.PropsWithChildren) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        location.reload();
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
