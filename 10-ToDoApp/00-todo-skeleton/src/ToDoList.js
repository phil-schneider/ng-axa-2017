import React, {Component} from 'react';
import ToDoListItem from './ToDoListItem';
import PropTypes from 'prop-types'

export default class ToDoList extends Component {

    static propTypes = {
        removeListItemFunc: PropTypes.func.isRequired
    };
    
    render() {
        return <div>
            {
                 this.props.items.map((itemValue, index) =>
                (
                <ul key={index} id="todo-list" className="todo-list">
                    <ToDoListItem index={index} value={itemValue} removeListItemFunc={this.props.removeListItemFunc}/>
                </ul>
                ))
            }
        </div>
    }
}
