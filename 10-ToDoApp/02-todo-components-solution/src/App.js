import React from 'react';
import ToDoList from './components/ToDoList';
import NewToDoForm from './components/NewToDoForm';
import {loadToDos, storeToDos} from './persistence';

class App extends React.Component {

    state = {
        // todos: [{id: 1, title: 'Learn React'}, {id: 2, title: 'Learn Redux'}]
        todos: []
    };

    render() {
        return (
            <div className="App">

                <div className="todoapp-header">
                    <h1 id="title">Simplistic ToDo</h1>
                    <h4>A most simplistic ToDo List in React.</h4>
                </div>

                <section className="todoapp">

                    <NewToDoForm onAddToDo={this.addToDo}/>

                    <div className="main">
                        <ToDoList todos={this.state.todos} onRemoveToDo={this.removeToDo}/>
                    </div>
                </section>
                <footer className="info">
                    <p>JavaScript Example / Initial template from <a
                        href="https://github.com/tastejs/todomvc-app-template">todomvc-app-template</a>
                    </p>
                </footer>
            </div>
        );
    }

    componentDidMount(){
        const todos = loadToDos();
        this.setState({todos});
    }

    addToDo = (title) => {
        const newToDos = [...this.state.todos, {id: Math.random(), title:title}];
        this.setState({todos: newToDos});
        storeToDos(newToDos);
    };

    removeToDo = (toDo) => {
        const newToDos = this.state.todos.filter(t => t !== toDo);
        this.setState({todos: newToDos});
        storeToDos(newToDos);
    }
}

export default App;
