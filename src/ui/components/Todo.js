import React from 'react'
import PropTypes from 'prop-types'

// const Todo = ({ onClick, completed, text }) => (
// 	<li
// 		onClick={onClick}
// 		style={{
// 			textDecoration: completed ? 'line-through' : 'none'
// 		}}
// 	>
// 		{text}
// 	</li>
// )

// Todo.propTypes = {
// 	onClick: PropTypes.func.isRequired,
// 	completed: PropTypes.bool.isRequired,
// 	text: PropTypes.string.isRequired
// }

const Todo = (props) => {
	const { completed, title, description, _id } = props.todo;
	const cardColor = completed ? 'text-white bg-secondary' : '';
	const btnColor = completed ? 'btn btn-primary btn-sm' : 'btn btn-outline-primary btn-sm';
	const toggleTodo = () => {
		const newTodo = Object.assign({}, props.todo, { completed: !completed });
		props.toggleTodo(newTodo);
	}

	const deleteTodo = () => {
		props.deleteTodo(props.todo);
	}

	return (
		<div key={props.id} className={`card ${cardColor} col-md-2`} style={{ margin: '2%', paddingBottom: '20px' }} >
			<div className="card-body" style={{ cursor: 'pointer' }} onClick={toggleTodo}>
				<h4 className="card-title">{title}</h4>
				<p className="card-text">{description}</p>
			</div>
			<div style={{ margin: '5%' }}>
				<button
					value={_id}
					style={{ marginRight: '10%' }}
					onClick={toggleTodo}
					className={btnColor}
				>
					{completed ? 'Undone' : 'Done'}
				</button>
				<button
					id={_id}
					onClick={deleteTodo}
					className={btnColor}
				>
					Delete
				</button>
			</div>
		</div>
	);
};

Todo.propTypes = {
	todo: PropTypes.shape({
		_id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
		description: PropTypes.string.isRequired,
	}).isRequired,
	// _id: PropTypes.string.isRequired,
	// title: PropTypes.string.isRequired,
	// completed: PropTypes.bool.isRequired,
	// description: PropTypes.string.isRequired,
	toggleTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired,
};


export default Todo
