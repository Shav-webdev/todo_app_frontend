import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import React, { useCallback, useState } from 'react';
import { IconButton, ListItem, TextField } from '@mui/material';
import { Todo, useUpdateTodoMutation } from '../../generated/graphql';

const EditToDo = ({
  editableTodo,
  closeEditMode,
}: {
  editableTodo: Todo;
  closeEditMode: Function;
}) => {
  const [updatedTodo, setUpdatedTodo] = useState<string>(
    editableTodo.title || ''
  );

  const [editToDo] = useUpdateTodoMutation({
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          title: () => data?.updateTodo.title,
        },
      });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTodo(e.target.value);
  };

  const handleClose = (e: React.MouseEvent) => {
    closeEditMode();
  };

  const handleUpdate = useCallback(() => {
    editToDo({
      variables: {
        id: editableTodo.id,
        title: updatedTodo,
      },
    }).then((res) => {
      closeEditMode();
    });
  }, [editToDo, updatedTodo, editableTodo.id, closeEditMode]);

  return (
    <ListItem
      sx={{
        border: '1px solid #000',
        borderRadius: '5px',
        marginBottom: '5px',
      }}
      secondaryAction={
        <>
          <IconButton
            onClick={handleClose}
            sx={{ marginRight: '10px' }}
            edge='end'
            aria-label='edit'
          >
            <CloseIcon />
          </IconButton>
          <IconButton onClick={handleUpdate} edge='end' aria-label='delete'>
            <SendIcon />
          </IconButton>
        </>
      }
    >
      <TextField onChange={handleChange} value={updatedTodo} fullWidth />
    </ListItem>
  );
};

export default EditToDo;
