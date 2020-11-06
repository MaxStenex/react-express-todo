import React from 'react';

const Todo: React.FC = () => {
  return (
    <li className='todos__item todos-item'>
      <div className='todos-item__about'>
        <h3 className='todos-item__name'>Task 1</h3>
        <div className='todos-item__description'>This in first task</div>
      </div>
      <div className='todos-item__buttons'>
        <button className='todos-item__toggle'>Complete</button>
        <button className='todos-item__delete'>Delete</button>
      </div>
    </li>
  );
};

export default Todo;
