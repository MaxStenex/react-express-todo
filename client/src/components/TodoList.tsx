import React from 'react';
import Todo from './Todo';
import '../scss/Todo.scss';
import { setTodos, TodoType } from '../reducers/todoReducer';
import { TodoContext } from './App';
import Axios from 'axios';

const TodoList: React.FC = () => {
  const { state, dispatch } = React.useContext(TodoContext);
  React.useEffect(() => {
    Axios.get<Array<TodoType>>('/api/todos').then((response) => {
      dispatch(
        setTodos(
          response.data.map(
            (todo: any): TodoType => {
              return {
                completed: todo.completed,
                id: todo._id,
                name: todo.name,
                description: todo.description,
              };
            }
          )
        )
      );
    });
  }, [dispatch]);

  return (
    <section className='todos'>
      <div className='container'>
        <ul className='todos__list'>
          {state.map((todo: TodoType, index) => {
            return (
              <Todo
                key={todo.id}
                dispatch={dispatch}
                name={todo.name}
                description={todo.description}
                completed={todo.completed}
                id={todo.id}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default TodoList;
