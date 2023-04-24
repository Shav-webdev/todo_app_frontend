import { gql } from '@apollo/client';

export const newTodo = gql`
  subscription newTodo {
    newTodo {
      id
      title
      dueDate
    }
  }
`;
