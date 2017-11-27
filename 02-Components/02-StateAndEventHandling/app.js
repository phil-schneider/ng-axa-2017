class GreeterComponent extends React.Component {

    constructor(){
        super();
        this.state = { time: new Date()};
    }

    render() {
        const now = new Date();

        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.message}</p>
                <p>The current time is:</p>
                <p>{this.state.time.toLocaleString()}</p>
                <button onClick={() => this.refresh()}>Update</button>
            </div>
        );
    }

    refresh() {
        this.setState({time: new Date()});
    };
}


const app = <GreeterComponent title="Greetings" message="Hello World!"/>;

ReactDOM.render(
    app,
    document.getElementById('root')
);



// DEMO:
// - extract message into variable
// - introduce refresh button
