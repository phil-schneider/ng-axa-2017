import React, {Component} from 'react';
import NewToDoForm from './NewToDoForm';
import ToDoList from './ToDoList';
import {loadToDos, deleteToDo} from '../persistence';

class PendingToDos extends Component {

    state = {
        todos: []
    };

    render() {
        return (
            <div>
                <div className="main">
                    <ToDoList todos={this.state.todos} onRemoveToDo={this.removeToDo}/>
                </div>
            </div>
        );
    }

    componentDidMount(){
        loadToDos(1)
            .then((todos) => this.updateToDos(todos));
    }

    removeToDo = (toDo) => {
        deleteToDo(toDo);
        const newToDos = this.state.todos.filter(t => t.id !== toDo.id);

        this.updateToDos(newToDos);
    };

    updateToDos = (updatedToDos) => {
        const pendingToDos = updatedToDos.filter(t => t.completed)
        this.setState({todos: pendingToDos});
    };
}

export default PendingToDos;