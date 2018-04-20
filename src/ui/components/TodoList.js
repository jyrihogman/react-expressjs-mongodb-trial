import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
	const todoComponents = todos.map(todo => (
		<Todo
			deleteTodo={deleteTodo}
			toggleTodo={toggleTodo}
			key={todo._id}
			todo={todo}
		/>
	));

	return (
		<div className="col-md-12">
			<div className="row justify-content-md-center">
				{todoComponents}
			</div>
		</div>
	);
};

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		_id: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
	})).isRequired,
	deleteTodo: PropTypes.func.isRequired,
	toggleTodo: PropTypes.func.isRequired,
};

export default TodoList
