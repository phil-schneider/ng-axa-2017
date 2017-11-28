import React, {Component} from 'react';
import DoneList from './DoneList';
import PendingList from './PendingList';
import axios from 'axios'

import {
    HashRouter as Router,
    Route, Link, Switch
} from 'react-router-dom';


const API_URL = 'http://localhost:3456/todos';

export default class App extends Component {



    constructor(props) {
        super(props);
        this.state = {
            items: []
        };

        this.addListItem = this.addListItem.bind(this);
        this.removeListItem = this.removeListItem.bind(this);
        this.markDoneListItem = this.markDoneListItem.bind(this);
    }

    componentDidMount(){
        axios.get(API_URL)
            .then((response) => {
                this.setState({
                    items: response.data.result
                })
            });
    }

    render() {
        return (
            <div className="App">
                <div className="todoapp-header">
                    <h1 id="title">Simplistic ToDo</h1>
                    <h4>A most simplistic ToDo List in React.</h4>
                </div>

                <Router>
                    <div>
                        <Link to="/">Pending</Link>   &nbsp;
                        <Link to="/done">Done</Link>
                        <Route exact path="/" render={(props) => (
                            <PendingList
                                items={this.state.items}
                                removeListItemFunc={this.markDoneListItem}
                                addListItemFunc={this.addListItem}

                            />
                        )}/>

                        <Route path="/done" render={(props) => (
                            <DoneList
                                items={this.state.items}
                                removeListItemFunc={this.removeListItem}

                            />
                        )}/>
                    </div>
                </Router>

                <footer className="info">
                    <p>JavaScript Example / Initial template from <a
                        href="https://github.com/tastejs/todomvc-app-template">todomvc-app-template</a>
                    </p>
                </footer>
            </div>
        );
    }

    removeListItem(id) {
        console.log('removeListItem');


        axios.delete(API_URL + '/'+id)
            .then( (response) => {
                console.log('ID '+ {id} + ' removed ');
        this.setState({
            items: this.state.items.filter((item) => item.id !== id)
        })
            });
    }

    markDoneListItem(id) {
        console.log('markDoneListItem');
        const newItems = [...this.state.items]
        for (let item of newItems) {
            if (item.id === id) {
                item.completed = true;
                axios.put(API_URL+ '/' + id, item)
                    .then((response) =>  {console.log('updated' + item)})
            }
        }
        this.setState({items: newItems});
    }


    addListItem(value) {
        if (!value.trim()) {
            return
        }


        const singleTodo = {
            "title": value,
            "completed": false}


        axios.post(API_URL,singleTodo)
            .then(
                (response) => {
                    singleTodo.id = response.data.result;

                let values = [...this.state.items, singleTodo];
                    this.setState({items: values});
                console.log(singleTodo);
                }

    )
    }


    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    getRandomInt() {
        const min = 1;
        const max = 99999999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


}

