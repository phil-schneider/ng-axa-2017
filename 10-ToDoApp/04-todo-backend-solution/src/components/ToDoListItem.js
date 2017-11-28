import React from 'react';
import {PropTypes} from 'prop-types';

const ToDoListItem = ({todo, onRemoveToDo}) => {

    let removeButton = null;
    if (todo.id){
        removeButton =  <button onClick={() => onRemoveToDo(todo)}>X</button>
    }

    return (
        <li key={todo.id}>
            {todo.title}
            {removeButton}
        </li>
    );
};

ToDoListItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string.isRequired
    }).isRequired,
    onRemoveToDo: PropTypes.func.isRequired
};

export default ToDoListItem;
