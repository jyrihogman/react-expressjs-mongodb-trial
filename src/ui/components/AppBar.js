import React from 'react';
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import DeleteTodos from '../containers/DeleteTodos';

const AppBar = () => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
		<DeleteTodos>
			Delete completed Todos
		</DeleteTodos>
		<div>
			<span style={{ color: 'white' }}>Show: </span>
			<FilterLink filter={VisibilityFilters.SHOW_ALL}>
				All
			</FilterLink>
			<FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
				Active
			</FilterLink>
			<FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
				Completed
			</FilterLink>
		</div>
	</nav>
);

export default AppBar;
