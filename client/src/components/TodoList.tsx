import React from 'react';
import Todo from './Todo';
import '../scss/Todo.scss';

const TodoList: React.FC = () => {
  return (
    <section className='todos'>
      <div className='container'>
        <ul className='todos__list'>
          <Todo />
          <Todo />
        </ul>
      </div>
    </section>
  );
};

export default TodoList;
