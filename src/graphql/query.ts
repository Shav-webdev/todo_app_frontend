import { gql } from '@apollo/client';

export const todos = gql(`
  query ToDos {
    todos {
      id
      title
      dueDate
    }
  }
`);
