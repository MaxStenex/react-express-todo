import React from 'react';
import '../scss/App.scss';
import '../scss/normalize.scss';
import Footer from './Footer';
import Header from './Header';
import TodoList from './TodoList';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <TodoList />
      </main>
      <Footer />
    </>
  );
};

export default App;
