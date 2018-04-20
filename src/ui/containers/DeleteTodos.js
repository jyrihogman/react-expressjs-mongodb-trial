import { connect } from 'react-redux'
import { performDeleteCompletedTodos } from '../actions'
import Delete from '../components/Delete';

const mapStateToProps = (state) => ({
	todos: state.todos
})

const mapDispatchToProps = dispatch => ({
	deleteCompletedTodos: () => dispatch(performDeleteCompletedTodos())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Delete)
