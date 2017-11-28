import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class ToDoListItem extends Component {


    static propTypes = {
        removeListItemFunc: PropTypes.func.isRequired
    };

    render(){
        return (
                <li key={this.props.index}>{this.props.value}
                    <button id="del-button" className="add-button" itemID={this.props.index} type="submit"
                            onClick={() => this.props.removeListItemFunc(this.props.index)}>X</button>
                </li>

        );
    }
}