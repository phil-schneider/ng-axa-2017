var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NewToDoForm from './NewToDoForm';
import ToDoList from './ToDoList';
import { addToDo, removeToDo, loadToDos } from '../store/todoActions';
var ToDos = /** @class */ (function (_super) {
    __extends(ToDos, _super);
    function ToDos() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.addToDo = function (title) {
            var newTodo = { id: Math.random(), title: title };
            _this.props.addToDo(newTodo);
        };
        _this.removeToDo = function (toDo) {
            _this.props.removeToDo(toDo);
        };
        return _this;
    }
    ToDos.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(NewToDoForm, { onAddToDo: this.addToDo }),
            React.createElement("div", { className: "main" },
                React.createElement(ToDoList, { todos: this.props.todos, onRemoveToDo: this.removeToDo }))));
    };
    ToDos.prototype.componentDidMount = function () {
        this.props.loadToDos();
    };
    return ToDos;
}(React.Component));
var enhance = connect(function (state) { return ({ todos: state.todo.todos, message: state.notification.message }); }, // map state to props
function (dispatch) { return bindActionCreators({
    loadToDos: loadToDos,
    addToDo: addToDo,
    removeToDo: removeToDo
}, dispatch); });
export default enhance(ToDos);
//# sourceMappingURL=ToDos.js.map