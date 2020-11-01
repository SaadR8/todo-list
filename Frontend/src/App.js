import React from 'react';
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import styles from './App.module.css';

function App() {
  return (
      <div className={styles.frame}>
        <Header />
        <Todos />
        <AddTodo/>
      </div>
  );
}

export default App;
