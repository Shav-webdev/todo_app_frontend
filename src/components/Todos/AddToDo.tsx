import React from 'react';
import { Box, Button, TextField } from '@mui/material';

const AddToDo = ({
  tempToDo,
  handleChange,
  handleAddToDo,
}: {
  tempToDo: string;
  handleChange: Function;
  handleAddToDo: Function;
}) => {
  const onAddBtnClick = () => {
    if (tempToDo.trim().length === 0) return;
    handleAddToDo();
  };

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        marginBottom: '20px',
      }}
    >
      <TextField onChange={onchange} value={tempToDo} fullWidth />
      <Button
        onClick={onAddBtnClick}
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
