import React, {Component} from 'react';
import NewToDo from './NewToDo';
import ToDoList from './ToDoList';

export default class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            items: []
        };

        this.addListItem = this.addListItem.bind(this);
        this.removeListItem = this.removeListItem.bind(this);

    }

    render() {
        return (
            <div className="App">

                <div className="todoapp-header">
                    <h1 id="title">Simplistic ToDo</h1>
                    <h4>A most simplistic ToDo List in React.</h4>
                </div>

                <section className="todoapp">
                    <NewToDo addListItemFunc={this.addListItem}/>

                    {/*<form className="new-todo" onSubmit={}>
                        <input id="todo-text" type="text" placeholder="What needs to be done?" autoFocus
                               autoComplete="off" value={this.state.newItem}
                               name="newItem"
                               onChange={this.handleInputChange.bind(this)}/>
                        <button id="add-button" className="add-button" type="submit">+</button>
                    </form>
                    */}

                    <div className="main">
                        <ToDoList items={this.state.items} removeListItemFunc={this.removeListItem} />
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

    removeListItem(index) {
        this.setState({
            items: this.state.items.filter((_, i) => i !== index)
        })
    }


    addListItem(value) {
        console.log('value: ' + value);

        if (!value.trim()) {
            return
        }
        let values = [...this.state.items, value];
        this.setState({items: values,});
    }


}

