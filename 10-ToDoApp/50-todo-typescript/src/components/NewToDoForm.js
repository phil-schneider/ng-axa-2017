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
import { PropTypes } from 'prop-types';
var NewToDoForm = /** @class */ (function (_super) {
    __extends(NewToDoForm, _super);
    function NewToDoForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            toDoTitle: ''
        };
        _this.formChange = function (e) {
            _this.setState((_a = {}, _a[e.currentTarget.name] = e.currentTarget.value, _a));
            var _a;
        };
        _this.addToDo = function (e) {
            e.preventDefault();
            _this.props.onAddToDo(_this.state.toDoTitle);
            _this.setState({ toDoTitle: '' });
        };
        return _this;
    }
    NewToDoForm.prototype.render = function () {
        return (React.createElement("form", { className: "new-todo", onSubmit: this.addToDo },
            React.createElement("input", { id: "todo-text", name: "toDoTitle", type: "text", placeholder: "What needs to be done?", autoFocus: true, autoComplete: "off", value: this.state.toDoTitle, onChange: this.formChange }),
            React.createElement("button", { id: "add-button", className: "add-button" }, "+")));
    };
    NewToDoForm.propTypes = {
        onAddToDo: PropTypes.func.isRequired
    };
    return NewToDoForm;
}(React.Component));
export default NewToDoForm;
//# sourceMappingURL=NewToDoForm.js.map