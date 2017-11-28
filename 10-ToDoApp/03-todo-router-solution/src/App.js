import React from 'react';
import {HashRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import PendingToDos from './components/PendingToDos';
import DoneToDos from './components/DoneToDos';
import ToDoDetail from './components/ToDoDetail';

class App extends React.Component {

    render() {
        return (
            <div className="App">

                <div className="todoapp-header">
                    <h1 id="title">Simplistic ToDo</h1>
                    <h4>A most simplistic ToDo List in React.</h4>
                </div>

                <section className="todoapp">
                    <Router>
                        <div>
                            <div className="nav">
                                <NavLink exact to="/" activeClassName="selected">Pending</NavLink>
                                <NavLink exact to="/done" activeClassName="selected">Done</NavLink>
                            </div>
                            <Switch>
                                <Route exact path="/" component={PendingToDos}/>
                                <Route exact path="/done" component={DoneToDos}/>
                                <Route exact path="/detail/:id" component={ToDoDetail}/>
                            </Switch>
                        </div>
                    </Router>

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
