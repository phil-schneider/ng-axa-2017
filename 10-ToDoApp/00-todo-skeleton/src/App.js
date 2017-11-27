import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div className="App">

                <div className="todoapp-header">
                    <h1 id="title">Simplistic ToDo</h1>
                    <h4>A most simplistic ToDo List in React.</h4>
                </div>

                <section className="todoapp">

                    <form className="new-todo">
                        <input id="todo-text" type="text" placeholder="What needs to be done?" autoFocus
                               autoComplete="off"/>
                        <button id="add-button" className="add-button">+</button>
                    </form>

                    <div className="main">
                        <ul id="todo-list" className="todo-list">
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
}

export default App;
