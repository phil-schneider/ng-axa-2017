import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class NewToDo extends Component {

    static propTypes = {
        addListItemFunc: PropTypes.func.isRequired
    };
    
    constructor(props) {
        super(props);
        this.state = {
            newItem: '',
        };
        this.addListItemIntern = this.addListItemIntern.bind(this);
    }

    render() {
        return (
            <form className="new-todo" onSubmit={this.addListItemIntern}>
                <input id="todo-text" type="text" placeholder="What needs to be done?" autoFocus
                       autoComplete="off" value={this.state.newItem}
                       name="newItem"
                       onChange={this.handleInputChange.bind(this)}/>
                <button id="add-button" className="add-button" type="submit">+</button>
            </form>
        )

    }

    addListItemIntern(event) {
        event.preventDefault();
        this.props.addListItemFunc(this.state.newItem);
        this.setState({
            newItem: ''
        })

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }
}
