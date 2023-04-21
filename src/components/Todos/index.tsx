import { Box, List } from '@mui/material';
import ToDoItem from './ToDoItem';
import AddToDo from './AddToDo';

export type ITodo = {
  id: number;
  title: string;
};

const Todos = () => {
  const todos: ITodo[] = [
    {
      id: 1,
      title: 'first',
    },
    {
      id: 2,
      title: 'second',
    },
    {
      id: 3,
      title: 'third',
    },
    {
      id: 4,
      title: 'fourth',
    },
  ];

  return (
    <Box
      sx={{
        margin: '0 auto',
        width: '600px',
      }}
    >
      <AddToDo />
      <List dense={false}>
        {todos.map((todo: ITodo) => {
          return <ToDoItem todo={todo} />;
        })}
      </List>
    </Box>
  );
};

export default Todos;
