import React from 'react';
import {PropTypes} from 'prop-types';

const ToDoListItem = ({todo, onRemoveToDo}) => (
    <li key={todo.id}>
        {todo.title}
        <button onClick={() => onRemoveToDo(todo)}>X</button>
    </li>
);

ToDoListItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired,
    onRemoveToDo: PropTypes.func.isRequired
};

export default ToDoListItem;
