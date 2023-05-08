import React, { useState } from 'react';
import EditToDo from './EditToDo';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Reference, StoreObject } from '@apollo/client';
import { IconButton, ListItem, ListItemText } from '@mui/material';
import { Todo, useDeleteTodoMutation } from '../../generated/graphql';

const ToDoItem = ({ todo }: { todo: Todo }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const [destroyToDo] = useDeleteTodoMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          todos(existingTodos, { readField }) {
            return existingTodos.filter(
              (todoRef: Reference | StoreObject | undefined) =>
                data?.deleteTodo !== readField('id', todoRef)
            );
          },
        },
      });
    },
    optimisticResponse: {
      deleteTodo: todo.id,
    },
  });

  const handleDelete = () => {
    destroyToDo({
      variables: {
        id: todo.id,
      },
    });
  };

  const openEditMode = () => {
    setIsEditMode(true);
  };

  const closeEditMode = () => {
    setIsEditMode(false);
  };

  return isEditMode ? (
    <EditToDo closeEditMode={closeEditMode} editableTodo={todo} />
  ) : (
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
          <IconButton
            onClick={openEditMode}
            sx={{ marginRight: '10px' }}
            edge='end'
            aria-label='edit'
          >
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleDelete} edge='end' aria-label='delete'>
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
