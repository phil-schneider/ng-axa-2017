import React from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';
import {ToDo} from '../store/todoModel';

interface ToDoListItemProps {todo: ToDo, onRemoveToDo: (todo: ToDo) => void};

const ToDoListItem: React.StatelessComponent<ToDoListItemProps> = ({todo, onRemoveToDo}) => (
    <li key={todo.id}>
        <Link to={`todos/${todo.id}`}>
            {todo.title}
        </Link>
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
