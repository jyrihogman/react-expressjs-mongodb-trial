import React from 'react'
import PropTypes from 'prop-types'

const Delete = ({ children, deleteCompletedTodos }) => (
	<button
		className="mr-auto btn btn-primary btn-lg"
		style={{ color: 'white' }}
		onClick={deleteCompletedTodos}
	>
		{children}
	</button>
)

Delete.propTypes = {
	children: PropTypes.node.isRequired,
	deleteCompletedTodos: PropTypes.func.isRequired
}

export default Delete
