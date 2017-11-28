import React, {Component} from 'react';
import NewToDoForm from './NewToDoForm';
import ToDoList from './ToDoList';
import {loadToDos, storeToDos} from '../persistence';


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
        const todos = loadToDos();

        this.updateToDos(todos);
    }

    removeToDo = (toDo) => {
        const todos = loadToDos();
        const newToDos = todos.filter(t => t.id !== toDo.id);
        storeToDos(newToDos);

        this.updateToDos(newToDos);
    };

    updateToDos = (updatedToDos) => {
        const pendingToDos = updatedToDos.filter(t => t.completed)
        this.setState({todos: pendingToDos});
    };
}

export default PendingToDos;