const todos = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_TODOS_SUCCESS':
			return [...state, ...action.payload.todos];
		case 'ADD_TODO_SUCCESS':
			return [
				...state,
				{
					_id: action.payload.todo._id,
					title: action.payload.todo.title,
					description: action.payload.todo.description,
					completed: action.payload.todo.completed,
				}
			]
		case 'TOGGLE_TODO_SUCCESS':
			return state.map(todo =>
				(todo._id === action.payload._id)
					? { ...todo, completed: !todo.completed }
					: todo
			)
		case 'DELETE_COMPLETED_TODOS_SUCCESS':
			return [...state.filter(todo => todo.completed === false)]
		case 'DELETE_TODO_SUCCESS':
			return [
				...state.filter(todo => todo._id !== action.payload.todo._id)
			]
		default:
			return state
	}
}

export default todos
