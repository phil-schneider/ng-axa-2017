import React, {Component} from 'react';
import PropTypes from 'prop-types'
import NewToDo from './NewToDo';
import ToDoList from './ToDoList';

export default class PendingList extends Component {

    render() {
        return (
            <section className="todoapp">
                <NewToDo addListItemFunc={this.props.addListItemFunc}/>

                <div className="main">
                    <ToDoList items={this.props.items}
                              removeListItemFunc={this.props.removeListItemFunc}
                              filterItemFunc={(i) => (i.completed === false)}
                    />
                </div>
            </section>
        )
    }
}