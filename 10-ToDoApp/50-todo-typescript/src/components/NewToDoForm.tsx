import React from 'react';
import {PropTypes} from 'prop-types'

interface NewToDoFormProps {
    onAddToDo: (title: string) => void
}

interface NewToDoFormState {
    toDoTitle: string
}

export default class NewToDoForm extends React.Component<NewToDoFormProps, NewToDoFormState> {

    static propTypes = {
        onAddToDo: PropTypes.func.isRequired
    };

    state: NewToDoFormState = {
        toDoTitle: ''
    };

	render() {
		return (
            <form className="new-todo" onSubmit={this.addToDo}>
                <input id="todo-text" name="toDoTitle" type="text" placeholder="What needs to be done?"
                       autoFocus
                       autoComplete="off"
                       value={this.state.toDoTitle}
                       onChange={this.formChange}
                />
                <button id="add-button" className="add-button">+</button>
            </form>
		);
	}

    formChange = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    };

	addToDo = (e) => {
	    e.preventDefault();
        this.props.onAddToDo(this.state.toDoTitle);
        this.setState({ toDoTitle: ''});
    }
}
