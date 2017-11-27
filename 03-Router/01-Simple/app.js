const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouter.Route;
const Link = ReactRouterDOM.Link;

const Home = ({history}) => (
    <div>
        <h2>Home</h2>
        <button onClick={() => history.push('/about')}>Go</button>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

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
                            <Link to="/about">About</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


