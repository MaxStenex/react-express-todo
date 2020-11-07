import React from 'react';
import '../scss/Header.scss';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { TodoContext } from './App';
import { addTodo } from '../reducers/todoReducer';

const Header: React.FC = () => {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const { dispatch } = React.useContext(TodoContext);

  const { register, handleSubmit } = useForm();
  const onsubmit = async (formData: { name: string; description: string }) => {
    if (name.trim() === '' || description.trim() === '') {
      return;
    }
    try {
      const response = await Axios.post('api/todos/add', {
        name,
        description,
      });
      setName('');
      setDescription('');
      dispatch(addTodo(response.data));
    } catch (err) {}
  };

  const test = (evt: React.KeyboardEvent) => {
    if (evt.key === 'Enter') {
      handleSubmit(onsubmit);
    }
  };

  return (
    <header className='header'>
      <div className='container'>
        <h2 className='header__title'>React Express Todo</h2>
        <form
          onSubmit={handleSubmit(onsubmit)}
          className='header__main add-todo'
          onKeyPress={test}
        >
          <div className='add-todo__input-section'>
            <div className='add-todo__section'>
              <h3>Name</h3>
              <input
                name='name'
                type='text'
                value={name}
                ref={register}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                  setName(evt.target.value)
                }
              />
            </div>
            <div className='add-todo__section'>
              <h3>Description</h3>
              <input
                name='description'
                type='text'
                value={description}
                ref={register}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                  setDescription(evt.target.value)
                }
              />
            </div>
          </div>
          <button className='add-todo__button'>Add todo</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
