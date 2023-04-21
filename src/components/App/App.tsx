import React from 'react';
import Todos from '../Todos';
import { Box } from '@mui/material';

function App() {
  return (
    <Box
      sx={{
        margin: '100px auto 0',
      }}
    >
      <Todos />
    </Box>
  );
}

export default App;
