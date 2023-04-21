import { Box, Button, TextField } from '@mui/material';
import React, { useCallback, useState } from 'react';

const AddToDo = () => {
  const [tempToDo, setTempToDo] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempToDo(e.target.value);
  };

  const handleAddToDo = useCallback(() => {
    if (tempToDo.trim().length === 0) return;
  }, [tempToDo]);

  return (
    <Box
      sx={{
        display: 'flex',
        marginBottom: '20px',
      }}
    >
      <TextField onChange={handleChange} value={tempToDo} fullWidth />
      <Button
        onClick={handleAddToDo}
        sx={{
          minWidth: '100px',
        }}
        variant={'contained'}
        color={'success'}
      >
        Add
      </Button>
    </Box>
  );
};

export default AddToDo;
