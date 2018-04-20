import React from 'react'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import AppBar from './components/AppBar';
import './App.css';
import './bootstrap.css';

const App = () => (
	<div>
		<AppBar />
		<AddTodo />
		<VisibleTodoList />
	</div>
)

export default App
