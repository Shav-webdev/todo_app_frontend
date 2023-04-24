import React from 'react';
import Loading from '../Loading';
import ToDoItem from './ToDoItem';
import { List } from '@mui/material';
import { Todo } from '../../generated/graphql';

const TodosList = ({ loading, data }: { loading: Boolean; data?: Todo[] }) => {
  return loading ? (
    <Loading />
  ) : (
    <List dense={false}>
      {data?.length === 0
        ? 'No data'
        : data?.map((todo: Todo) => {
            return <ToDoItem key={todo.id} todo={todo} />;
          })}
    </List>
  );
};

export default React.memo(TodosList);
