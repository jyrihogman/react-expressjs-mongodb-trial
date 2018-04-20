import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import './App.css';
import './bootstrap.css';
import App from './App';
import rootReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import { fetchTodos } from './actions';

const store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware, // lets us dispatch() functions
	)
);

store
	.dispatch(fetchTodos())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
