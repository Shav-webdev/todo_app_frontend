import { gql } from '@apollo/client';

export const createToDo = gql(`
  mutation createTodo($title: String!) {
    createTodo(title: $title) {
      id, title, dueDate
    }
  }
`);

export const updateToDo = gql(`
  mutation updateTodo($id : ID!, $title: String!) {
    updateTodo(id: $id, title: $title) {
      id, title, dueDate
    }
  }
`);

export const deleteToDo = gql(`
  mutation deleteTodo($id : ID!) {
    deleteTodo(id: $id)
  }
`);
