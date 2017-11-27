class HelloComponent extends React.Component {
    render() {
        return (
            <div className="green">
                <h1>Hello world from React component!</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <HelloComponent/>,
    document.getElementById('component3')
);