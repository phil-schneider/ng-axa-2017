import React, {Component} from 'react';
import NewToDoForm from './NewToDoForm';
import ToDoList from './ToDoList';
import {loadToDos, saveToDo, updateToDo} from '../persistence';


class PendingToDos extends Component {

    state = {
        loadingMessage: 'Loading ...',
        todos: []
    };

    render() {

        let loadingIndicator = this.state.loadingMessage ? this.state.loadingMessage : null;

        return (
            <div>
                {loadingIndicator}
                <NewToDoForm onAddToDo={this.addToDo}/>

                <div className="main">
                    <ToDoList todos={this.state.todos} onRemoveToDo={this.completeToDo}/>
                </div>
            </div>
        );
    }

    componentDidMount(){
        loadToDos().then(
            (todos) => this.setState({todos: todos, loadingMessage: null})
        );
    }

    addToDo = (title) => {
        let newToDo = {title:title, completed: false};
        this.setState({loadingMessage: 'Saving ...'});
        saveToDo(newToDo)
            .then(todo => {
                const updatedToDos = this.state.todos.map(t => t !== newToDo ? t : todo);
                this.setState({todos: updatedToDos, loadingMessage: null});
            });
        const newToDos = [...this.state.todos, newToDo];

        this.setState({todos: newToDos})
    };

    completeToDo = (toDo) => {
        toDo.completed = true;
        this.setState({loadingMessage: 'Saving ...'});
        updateToDo(toDo)
            .then(todo => {
                this.setState({loadingMessage: null});
            });
        const updatedToDos = this.state.todos.filter(t => t.id !== toDo.id);

        this.setState({todos: updatedToDos})
    };


}

export default PendingToDos;