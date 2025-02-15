import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Bienvenue sur Mon SaaS
      </Typography>
      <Typography variant="body1" gutterBottom>
        Analysez les tendances et les dernières nouvelles sur le marché des cryptomonnaies.
      </Typography>
      <Button variant="contained" color="primary">
        Explorer les tendances Crypto
      </Button>
    </Container>
  );
}

export default App;