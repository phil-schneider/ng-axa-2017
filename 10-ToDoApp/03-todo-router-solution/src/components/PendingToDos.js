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
                <NewToDoForm onAddToDo={this.addToDo}/>

                <div className="main">
                    <ToDoList todos={this.state.todos} onRemoveToDo={this.completeToDo}/>
                </div>
            </div>
        );
    }

    componentDidMount(){
        const todos = loadToDos();
        this.updateToDos(todos);
    }

    addToDo = (title) => {
        const todos = loadToDos();
        const newToDos = [...todos, {id: Math.random(), title:title, completed: false}];
        storeToDos(newToDos);

        this.updateToDos(newToDos);
    };

    completeToDo = (toDo) => {
        const todos = loadToDos();
        const updatedToDos = todos.map(t => t.id !== toDo.id ? t : {...toDo, completed: true});
        storeToDos(updatedToDos);

        this.updateToDos(updatedToDos);
    };

    updateToDos = (updatedToDos) => {
        const pendingToDos = updatedToDos.filter(t => !t.completed)
        this.setState({todos: pendingToDos});
    };
}

export default PendingToDos;