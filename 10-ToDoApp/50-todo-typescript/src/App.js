import React from 'react';
import {PropTypes} from 'prop-types'
import {connect} from 'react-redux'
import ToDos from './components/ToDos';
import ToDoDetail from './components/ToDoDetail';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {

    render() {
        return (
            <div className="App">

                <div className="todoapp-header">
                    <h1 id="title">Simplistic ToDo</h1>
                    <h4>A most simplistic ToDo List in React.</h4>
                </div>

                <section className="todoapp">

                    <div className="notification">{this.props.message}</div>

                    <Router>
                        <Switch>
                            <Route exact path="/" component={ToDos}/>
                            <Route path="/todos/:id" component={ToDoDetail}/>
                        </Switch>
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


    const enhance = connect(
    (state) => ({message: state.notification.message}), // map state to props
    );

    export default enhance(App);
