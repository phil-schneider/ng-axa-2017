import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import todo from './todoReducer';
import notification from './notificationReducer';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({todo, notification});

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
);

