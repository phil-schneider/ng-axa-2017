const Parent = (props) => (
    <div>
        <h2>Home</h2>
        <h2>Children</h2>
        <ul>
            <li>
                <Link to={`${props.match.url}/child1`}>
                    Child 1
                </Link>
            </li>
            <li>
                <Link to={`${props.match.url}/child2`}>
                    Child 2
                </Link>
            </li>
        </ul>

        <Route exact path={props.match.url} render={() => (
            <h3>Please select a child.</h3>
        )}/>
        <Route path={`${props.match.url}/child1`} component={Child1}/>
        <Route path={`${props.match.url}/child2`} component={Child2}/>
    </div>
);
