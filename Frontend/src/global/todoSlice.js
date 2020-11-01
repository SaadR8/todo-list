import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'


export const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		value: [{
			_id: 0,
			title: 'Loading ...',
			completed: false
		}]
	},
	reducers: {
		addTodo: (state, action) => {
			state.value = [...state.value, action.payload];
		},
		delTodo: (state, action) => {
			state.value = state.value.filter(todo => (todo._id !== action.payload))
		},
		load: (state, action) => {
			state.value = action.payload
		},
		markComplete: (state, action) => {
			state.value[action.payload].completed = !state.value[action.payload].completed
		},
	},
});

export const { addTodo, markComplete, delTodo, load } = todoSlice.actions;


export const Load = () => dispatch => {
	axios.get('http://localhost:4000/todo/read')
		.then((res) => dispatch(load(res.data)))
}

export const addingTodo = (title) => dispatch => {
	axios.post('http://localhost:4000/todo/create',
		{ title: title }).then((res) => dispatch(addTodo(res.data)))
}

export const DelTodo = (_id) => dispatch => {
	axios.delete(`http://localhost:4000/todo/delete?todoId=${_id}`)
		.then((res) => dispatch(delTodo(_id)))
}

export const selectTodos = state => state.todos.value;

export const MarkComplete = (_id) => (dispatch, getState) => {
	let todos = [...getState().todos.value]
	for (let i = 0; i < todos.length; i++) {
		if (todos[i]._id === _id) {
			let todo = { ...todos[i] }
			todo.completed = !todo.completed
			axios.put(`http://localhost:4000/todo/update?todoId=${_id}`, todo)
				.then((res) => dispatch(markComplete(i)))
		}
	}
}



export default todoSlice.reducer;