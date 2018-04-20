import React from 'react'
import { connect } from 'react-redux'
import { performAddTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
	let descriptionInput, titleInput;

	return (
		<div style={{ padding: '3%' }} className="jumbotron mx-auto d-block col-sm-3">
			<h4>Add a new Todo!</h4>
			<div className="form-group">
				<label
					htmlFor="titleInput"
					className="col-form-label col-form-label-sm"
				>
					Title
						<input
						id="titleInput"
						className="form-control form-control-sm"
						type="text"
						ref={node => titleInput = node}
					/>
				</label>
			</div>
			<div className="form-group">
				<label htmlFor="descriptionInput" className="col-form-label col-form-label-sm">
					Description
						<input
						id="descriptionInput"
						className="form-control form-control-sm"
						type="text"
						ref={node => descriptionInput = node}
					/>
				</label>
			</div>
			<button
				onClick={e => {
					e.preventDefault()
					if (!titleInput.value.trim()) {
						return
					}
					dispatch(performAddTodo({ title: titleInput.value, description: descriptionInput.value }))
					titleInput.value = ''
					descriptionInput.value = ''
				}}
				className="btn btn-primary"
			>
				Submit
				</button>
		</div>
	);
}

export default connect()(AddTodo)
