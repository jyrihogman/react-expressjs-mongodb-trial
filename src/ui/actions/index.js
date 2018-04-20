export const FETCH_TODOS_BEGIN = 'FETCH_TODOS_BEGIN';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';
export const ADD_TODO_BEGIN = 'ADD_TODO_BEGIN';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';
export const DELETE_COMPLETED_TODOS_SUCCESS = 'DELETE_COMPLETED_TODOS_SUCCESS';
export const DELETE_COMPLETED_TODOS_FAILURE = 'DELETE_COMPLETED_TODOS_FAILURE';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS'
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE'

export const setVisibilityFilter = filter => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
});

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const toggleTodoSuccess = todo => ({
	type: 'TOGGLE_TODO_SUCCESS',
	payload: todo
});

export const toggleTodoError = error => ({
	type: 'TOGGLE_TODO_ERROR',
	payload: { error }
});

export function performToggleTodo(todo) {
	return dispatch => {
		return fetch(`http://localhost:3005/api/todo/${todo._id}`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'PUT',
			body: JSON.stringify(todo)
		})
			.then(handleErrors)
			.then(todores => {
				// console.log(todores);
				dispatch(toggleTodoSuccess(todores));
				return todores;
			})
			.catch(error => dispatch(toggleTodoError(error)));
	};
}

export const fetchTodosSuccess = todos => ({
	type: FETCH_TODOS_SUCCESS,
	payload: { todos }
});

export const fetchTodosError = error => ({
	type: FETCH_TODOS_FAILURE,
	payload: { error }
});

export function fetchTodos() {
	return dispatch => {
		return fetch("http://localhost:3005/api/todos")
			.then(handleErrors)
			.then(todos => {
				// console.log(todos);
				dispatch(fetchTodosSuccess(todos));
				return todos;
			})
			.catch(error => dispatch(fetchTodosError(error)));
	};
}

export const performAddTodoSuccess = todo => ({
	type: ADD_TODO_SUCCESS,
	payload: { todo }
});

export const performAddTodoError = error => ({
	type: ADD_TODO_FAILURE,
	payload: { error }
});

export function performAddTodo(todo) {
	const newTodo = Object.assign({}, todo, { completed: false })
	return dispatch => {
		return fetch('http://localhost:3005/api/todo', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify(newTodo),
		})
			.then(handleErrors)
			.then(todores => {
				// console.log(todores);
				dispatch(performAddTodoSuccess(todores));
				return todores;
			})
			.catch(error => dispatch(performAddTodoError(error)));
	};
}

export const performDeleteTodoSuccess = todo => ({
	type: DELETE_TODO_SUCCESS,
	payload: { todo }
});

export const performDeleteTodoError = error => ({
	type: DELETE_TODO_FAILURE,
	payload: { error }
});

export function performDeleteTodo(todo) {
	return dispatch => {
		return fetch(`http://localhost:3005/api/todo/delete/${todo._id}`, {
			method: 'DELETE',
			body: todo
		})
			.then(handleErrors)
			.then(todores => {
				// console.log(todores);
				dispatch(performDeleteTodoSuccess(todores));
				return todores;
			})
			.catch(error => dispatch(performDeleteTodoError(error)));
	};
}

export const performDeleteCompletedTodosSuccess = todo => ({
	type: DELETE_COMPLETED_TODOS_SUCCESS,
	payload: { todo }
});

export const performDeleteCompletedTodosError = error => ({
	type: DELETE_COMPLETED_TODOS_FAILURE,
	payload: { error }
});

export function performDeleteCompletedTodos() {
	return dispatch => {
		return fetch('http://localhost:3005/api/todos/delete', {
			method: 'DELETE',
		})
			.then(handleErrors)
			.then(todores => {
				console.log(todores);
				dispatch(performDeleteCompletedTodosSuccess(todores));
				return todores;
			})
			.catch(error => dispatch(performDeleteCompletedTodosError(error)));
	};
}


// Handle HTTP errors since fetch won't.
function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response.json();
}