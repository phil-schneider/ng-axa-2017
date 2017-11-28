import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const state = {
    todos: [
        {id: 1, title: 'Learn React'},
        {id: 2, title: 'Learn Redux'}
    ]
};

//window.state = state;

ReactDOM.render(<App todos={state.todos}/>, document.getElementById('root'));
