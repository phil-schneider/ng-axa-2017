class GreeterComponent extends React.Component {

    render() {

        let concated= this.props.title + ' ' + this.props.message

        return (
            <div>
                <h1>{concated}</h1>
                <h1>{this.props.title}</h1>
                <p>{this.props.message}</p>
                <p>The current time is:</p>
                <p>{new Date().toLocaleString()}</p>
            </div>
        );
    }
}


const app = <GreeterComponent title="Greetings" message="Hello World!"/>;

ReactDOM.render(
    app,
    document.getElementById('root')
);



// DEMO:
// - extract date & message into variable
// - introduce state for date & refresh button
