import React from 'react';
import ToDoList from './components/ToDoList';
import NewToDoForm from './components/NewToDoForm';

class App extends React.Component {

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
                        <ToDoList todos={this.props.todos} onRemoveToDo={this.removeToDo}/>
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

    addToDo = (title) => {
        this.props.todos.push({id: Math.random(), title:title});
        this.forceUpdate();
    };

    removeToDo = (toDo) => {
        this.props.todos.splice(this.props.todos.indexOf(toDo), 1);
        this.forceUpdate();
    }
}

export default App;
