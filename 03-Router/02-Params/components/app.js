class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>

                    <hr/>

                    <Route exact path="/" component={Home}/>
                    <Route path="/topics" component={Topics}/>
                </div>
            </Router>
        );
    }
}
