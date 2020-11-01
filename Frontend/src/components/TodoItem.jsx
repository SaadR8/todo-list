import { useDispatch } from 'react-redux';
import { MarkComplete, DelTodo } from '../global/todoSlice';
import React, {useEffect, useRef} from 'react'
import styles from './TodoItem.module.css'
import anime from 'animejs'

const TodoItem = (props) => {
   const { _id, title } = props.todo;
   const dispatch = useDispatch();

   const containerRef = useRef();

   useEffect(() => {
      anime({
         targets: containerRef.current,
         opacity: 1.0,
         loop: false,
         easing: "linear"
      });
   }, []);


   return (
      <div className={styles.container} ref={containerRef}>
         <div className={styles.round}>
            <input type="checkbox" defaultChecked={props.todo.completed ? true : false} onChange={() => dispatch(MarkComplete(_id))} id="checkbox"/>
            <label for="checkbox"></label>
         </div>
         <label className={styles.title}>{title}</label>
         <div className={styles.del}>
            <button onClick={() => dispatch(DelTodo(_id))} className={styles.btn}></button>
         </div>
      </div>
   )
}

export default TodoItem;