import { selectTodos, Load } from '../global/todoSlice'
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import styles from './Todos.module.css'

const Todos = (props) => {
   const dispatch = useDispatch();
   useEffect(() => { dispatch(Load()) }, [dispatch]);
   const todos = useSelector(selectTodos);
   return (
      <div className={styles.container}>
         {todos.map((todo) => (
            <TodoItem key={todo._id} todo={todo} />
         ))}
      </div>
   );
}

export default Todos;