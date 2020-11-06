import React from 'react';
import '../scss/Header.scss';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='container'>
        <h2 className='header__title'>React Express Todo</h2>
        <div className='header__main add-todo'>
          <div className='add-todo__input-section'>
            <div className='add-todo__section'>
              <h3>Name</h3>
              <input type='text' />
            </div>
            <div className='add-todo__section'>
              <h3>Description</h3>
              <input type='text' />
            </div>
          </div>
          <button className='add-todo__button'>Add todo</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
