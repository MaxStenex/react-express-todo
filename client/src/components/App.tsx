import Axios from 'axios';
import React from 'react';
import todoReducer, { setTodos, TodoType } from '../reducers/todoReducer';
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
  }, []);
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
