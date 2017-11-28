import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
;
var ToDoListItem = function (_a) {
    var todo = _a.todo, onRemoveToDo = _a.onRemoveToDo;
    return (React.createElement("li", { key: todo.id },
        React.createElement(Link, { to: "todos/" + todo.id }, todo.title),
        React.createElement("button", { onClick: function () { return onRemoveToDo(todo); } }, "X")));
};
ToDoListItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired,
    onRemoveToDo: PropTypes.func.isRequired
};
export default ToDoListItem;
//# sourceMappingURL=ToDoListItem.js.map