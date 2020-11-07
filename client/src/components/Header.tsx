import React from 'react';
import '../scss/Header.scss';

const Header: React.FC = () => {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  return (
    <header className='header'>
      <div className='container'>
        <h2 className='header__title'>React Express Todo</h2>
        <div className='header__main add-todo'>
          <div className='add-todo__input-section'>
            <div className='add-todo__section'>
              <h3>Name</h3>
              <input
                type='text'
                value={name}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                  setName(evt.target.value)
                }
              />
            </div>
            <div className='add-todo__section'>
              <h3>Description</h3>
              <input
                type='text'
                value={description}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                  setDescription(evt.target.value)
                }
              />
            </div>
          </div>
          <button className='add-todo__button'>Add todo</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
