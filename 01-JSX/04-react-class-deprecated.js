var HelloComponent = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Hello world from deprecated React class component!</h1>
            </div>
        );
    }
});

ReactDOM.render(
    <HelloComponent/>,
    document.getElementById('component4')
);