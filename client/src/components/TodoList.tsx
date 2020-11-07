import React from 'react';
import Todo from './Todo';
import '../scss/Todo.scss';
import { TodoType } from '../reducers/todoReducer';
import { TodoContext } from './App';

const TodoList: React.FC = () => {
  const { state, dispatch } = React.useContext(TodoContext);

  return (
    <section className='todos'>
      <div className='container'>
        <ul className='todos__list'>
          {state.map((todo: TodoType) => {
            return (
              <Todo
                dispatch={dispatch}
                name={todo.name}
                description={todo.description}
                completed={todo.completed}
                id={todo.id}
                key={todo.id}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default TodoList;
