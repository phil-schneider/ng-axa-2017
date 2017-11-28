import React from 'react';
import { PropTypes } from 'prop-types';
import ToDoListItem from './ToDoListItem';
var ToDoList = function (_a) {
    var todos = _a.todos, onRemoveToDo = _a.onRemoveToDo;
    return (React.createElement("ul", { id: "todo-list", className: "todo-list" }, todos.map(function (t) { return (React.createElement(ToDoListItem, { key: t.id, todo: t, onRemoveToDo: onRemoveToDo })); })));
};
ToDoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onRemoveToDo: PropTypes.func.isRequired
};
export default ToDoList;
//# sourceMappingURL=ToDoList.js.map