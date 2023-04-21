import React from 'react';
import { ITodo } from './index';
import { IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ToDoItem = ({ todo }: { todo: ITodo }) => {
  return (
    <ListItem
      sx={{
        border: '1px solid #000',
        borderRadius: '5px',
        marginBottom: '5px',
        transition: '.2s',
        '&:hover': {
          transform: 'scale(1.01)',
        },
      }}
      secondaryAction={
        <>
          <IconButton sx={{ marginRight: '10px' }} edge='end' aria-label='edit'>
            <EditIcon />
          </IconButton>
          <IconButton edge='end' aria-label='delete'>
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <ListItemText primary={todo.title} />
    </ListItem>
  );
};

export default ToDoItem;
