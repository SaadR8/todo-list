import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../global/todoSlice'

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
