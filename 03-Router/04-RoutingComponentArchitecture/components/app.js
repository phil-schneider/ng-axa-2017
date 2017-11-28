class App extends React.Component {

    state = {
        message1: 'Message 1',
        message2: 'Message 2'
    };

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Child 1</Link>
                        </li>
                        <li>
                            <Link to="/child2">Child 2</Link>
                        </li>
                    </ul>

                    <hr/>

                    <Route exact path="/" render={(props) => (
                        <Child1
                            message={this.state.message1}
                            notify={this.alert}
                            {...props}
                        />
                    )}/>

                    <Route path="/child2/:id?" render={(props) => (
                        <Child2
                            message={this.state.message2}
                            notify={this.alert}
                            {...props}
                        />
                    )}/>
                </div>
            </Router>
        );
    }

    alert = (message) => alert('Notification from ' + message);
}
