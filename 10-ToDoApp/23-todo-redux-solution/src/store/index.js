import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger'
import todoReducer from './todoReducer';

const state = {
    todos: [
        {id: 1, title: 'Learn React'},
        {id: 2, title: 'Learn Redux'}
    ]
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    todoReducer,
    state,
    composeEnhancers(applyMiddleware(logger))
);
