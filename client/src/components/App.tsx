import React from 'react';
import todoReducer, { TodoType } from '../reducers/todoReducer';
import '../scss/App.scss';
import '../scss/normalize.scss';
import Footer from './Footer';
import Header from './Header';
import TodoList from './TodoList';

export const TodoContext = React.createContext<{
  state: Array<TodoType>;
  dispatch: React.Dispatch<any>;
}>({ state: [], dispatch: () => null });

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <Header />
      <main className='main'>
        <TodoList />
      </main>
      <Footer />
    </TodoContext.Provider>
  );
};

export default App;
