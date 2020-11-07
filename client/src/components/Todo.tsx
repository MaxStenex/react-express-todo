import React from 'react';
import { TodoType } from '../reducers/todoReducer';

type TodoProps = TodoType & any;

const Todo: React.FC<TodoProps> = ({
  name,
  id,
  completed,
  description,
  dispatch,
}) => {
  return (
    <li
      className={
        'todos__item todos-item ' + (completed ? ' todos-item--completed' : '')
      }
    >
      <div className='todos-item__about'>
        <h3 className='todos-item__name'>{name}</h3>
        <div className='todos-item__description'>{description}</div>
      </div>
      <div className='todos-item__buttons'>
        <button className='todos-item__toggle'>Complete</button>
        <button className='todos-item__delete'>Delete</button>
      </div>
    </li>
  );
};

export default Todo;
