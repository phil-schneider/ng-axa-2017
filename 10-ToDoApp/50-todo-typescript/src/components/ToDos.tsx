import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import NewToDoForm from './NewToDoForm';
import ToDoList from './ToDoList';
import {addToDo, removeToDo, loadToDos} from '../store/todoActions';

class ToDos extends React.Component<any> {

    render() {
        return (
            <div>
                <NewToDoForm onAddToDo={this.addToDo}/>

                <div className="main">
                    <ToDoList todos={this.props.todos} onRemoveToDo={this.removeToDo}/>
                </div>
            </div>
        );
    }

    componentDidMount(){
        this.props.loadToDos();
    }

    addToDo = (title) => {
        const newTodo = {id: Math.random(), title:title};
        this.props.addToDo(newTodo);
    };

    removeToDo = (toDo: number) => {
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

export default enhance(ToDos);
