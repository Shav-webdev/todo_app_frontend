import { Box } from '@mui/material';
import AddToDo from './AddToDo';
import { useToDosQuery, useCreateTodoMutation } from '../../generated/graphql';
import TodosList from './TodosList';
import { newTodo } from '../../graphql/subscription';
import { gql, useApolloClient } from '@apollo/client';
import React, { useCallback, useEffect, useState } from 'react';

const Todos = () => {
  const client = useApolloClient();
  const { data, loading } = useToDosQuery();
  const [tempToDo, setTempToDo] = useState<string>('');
  const [todos, setTodos] = useState(data?.todos);

  useEffect(() => {
    const subscription = client.subscribe({ query: newTodo }).subscribe({
      next: (result) => {
        const newTodo = result.data.newTodo;
        setTodos((prevTodos) =>
          newTodo
            ? [newTodo, ...(prevTodos ? Array.from(prevTodos) : [])]
            : prevTodos
        );
      },
      error: (error) => {
        console.error(error);
      },
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [todos, client]);

  useEffect(() => {
    if (!data?.todos) return;
    setTodos(data.todos);
  }, [data?.todos]);

  const [addToDo] = useCreateTodoMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          todos(existingTodos = []) {
            const newTodoRef = cache.writeFragment({
              data: data?.createTodo,
              fragment: gql`
                fragment createTodo on Todo {
                  id
                  title
                }
              `,
            });
            return [newTodoRef, ...existingTodos];
          },
        },
      });
    },
  });

  const handleChange = (todo: string) => {
    setTempToDo(todo);
  };

  const handleAddToDo = useCallback(() => {
    addToDo({
      variables: {
        title: tempToDo,
      },
    }).then((res) => {
      setTempToDo('');
    });
  }, [addToDo, tempToDo]);

  return (
    <Box
      sx={{
        margin: '0 auto',
        width: '600px',
      }}
    >
      <AddToDo
        handleAddToDo={handleAddToDo}
        handleChange={handleChange}
        tempToDo={tempToDo}
      />
      <TodosList data={todos} loading={loading} />
    </Box>
  );
};

export default Todos;
