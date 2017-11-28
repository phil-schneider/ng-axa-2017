import React, {Component} from 'react';
import ToDoListItem from './ToDoListItem';
import PropTypes from 'prop-types'

export default class ToDoList extends Component {

    static propTypes = {
        removeListItemFunc: PropTypes.func.isRequired,
        filterItemFunc: PropTypes.func.isRequired
    };
    
    render() {
        return <div>
            {
                 this.props.items.filter((item) => this.props.filterItemFunc(item)).map((item, index) =>
                (
                <ul key={index} id="todo-list" className="todo-list">
                    <ToDoListItem index={index} item={item} removeListItemFunc={this.props.removeListItemFunc}/>
                </ul>
                ))
            }
        </div>
    }
}
