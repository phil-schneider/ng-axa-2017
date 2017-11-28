import React from 'react';
import {PropTypes} from 'prop-types'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import ToDoList from './components/ToDoList';
import NewToDoForm from './components/NewToDoForm';
import {addToDo, removeToDo, loadToDos} from './store/todoActions';

class App extends React.Component {

    componentDidMount(){
        this.props.loadToDos();
    }

    render() {
        return (
            <div className="App">

                <div className="todoapp-header">
                    <h1 id="title">Simplistic ToDo</h1>
                    <h4>A most simplistic ToDo List in React.</h4>
                </div>

                <section className="todoapp">

                    <div className="notification">{this.props.message}</div>

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
        const newTodo = {id: Math.random(), title:title};
        this.props.addToDo(newTodo);
    };

    removeToDo = (toDo) => {
        this.props.removeToDo(toDo);
    }
}

const enhance = connect(
    (state) =>  ({ todos: state.todo.todos, message: state.notification.message}), // map state to props
    (dispatch) => bindActionCreators({ // map dispatch to props
        loadToDos,
        addToDo,
        removeToDo
    }, dispatch)
);

export default enhance(App);
