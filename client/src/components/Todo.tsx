import Axios from 'axios';
import React from 'react';
import { deleteTodo, TodoType, toggleComplete } from '../reducers/todoReducer';

type TodoProps = TodoType & any;

const Todo: React.FC<TodoProps> = ({
  name,
  id,
  completed,
  description,
  dispatch,
}) => {
  const onDelete = async (id: string) => {
    try {
      await Axios.post(`/api/todos/delete&${id}`);
      dispatch(deleteTodo(id));
    } catch (err) {
      console.log(err);
    }
  };

  const onToggle = async (id: string, completed: boolean) => {
    try {
      await Axios.post(`/api/todos/toggle-complete&${id}`, { completed });
      dispatch(toggleComplete(id));
    } catch (err) {
      console.log(err);
    }
  };

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
        <button
          className='todos-item__toggle'
          onClick={() => onToggle(id, completed)}
        >
          {completed ? 'Resume' : 'Complete'}
        </button>
        <button className='todos-item__delete' onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
