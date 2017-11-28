import React from 'react';
import {PropTypes} from 'prop-types';
import ToDoListItem from './ToDoListItem';

const ToDoList = ({todos, onRemoveToDo}) => (
    <ul id="todo-list" className="todo-list">
        {
            todos.map(t => (
                <ToDoListItem key={t.id} todo={t} onRemoveToDo={onRemoveToDo}/>
            ))
        }
    </ul>
);

ToDoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onRemoveToDo: PropTypes.func.isRequired
};

export default ToDoList;
