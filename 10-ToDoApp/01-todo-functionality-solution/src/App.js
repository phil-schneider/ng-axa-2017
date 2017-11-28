import React, {Component} from 'react';
import {loadToDos, storeToDos} from './persistence';

class App extends Component {

    state = {
        toDoTitle: '',
        // todos: [{id: 1, title: 'Learn React'}, {id: 2, title: 'Learn Redux'}]
        todos: []
    };

    render() {
        let submitButton = null;
        if (this.state.toDoTitle.length > 3){
            submitButton = <button id="add-button" className="add-button">+</button>;
        }

        return (
            <div className="App">

                <div className="todoapp-header">
                    <h1 id="title">Simplistic ToDo</h1>
                    <h4>A most simplistic ToDo List in React.</h4>
                </div>

                <section className="todoapp">

                    <form className="new-todo" onSubmit={this.addToDo}>
                        <input id="todo-text" name="toDoTitle" type="text" placeholder="What needs to be done?"
                               autoFocus
                               autoComplete="off"
                               value={this.state.toDoTitle}
                               onChange={this.formChange}
                        />
                        {submitButton}
                    </form>

                    <div className="main">
                        <ul id="todo-list" className="todo-list">
                            {
                                this.state.todos.map(t => (
                                    <li key={t.id}>
                                        {t.title}
                                        <button onClick={() => this.removeToDo(t)}>X</button>
                                    </li>
                                ))
                            }
                        </ul>
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

    formChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    addToDo = (e) => {
        e.preventDefault();
        const newToDos = [...this.state.todos, {id: Math.random(), title:this.state.toDoTitle, completed: false}];
        this.setState({todos: newToDos, toDoTitle: ''});
        storeToDos(newToDos);
    };

    removeToDo = (toDo) => {
        const newToDos = this.state.todos.filter(t => t !== toDo);
        this.setState({todos: newToDos});
        storeToDos(newToDos);
    }
}

export default App;
