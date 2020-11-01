import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addingTodo } from '../global/todoSlice'
import styles from './AddTodo.module.css'

const AddTodo = () => {
   const [title, setTitle] = useState('');

   const dispatch = useDispatch();

   const onSubmit = (e) => {
      e.preventDefault();
      dispatch(addingTodo(title));
      setTitle('');
   }

   const onChange = (e) => {
      setTitle(e.target.value);
   }

   return (
      <form onSubmit={onSubmit} className={styles.form}>
         <input
            type="submit"
            value="+"
            className={styles.btn}
         />
         <input
            type="text"
            name="title"
            className={styles.textBar}
            placeholder="Add a task"
            value={title}
            onChange={onChange}
         />
      </form>
   )
}


export default AddTodo;