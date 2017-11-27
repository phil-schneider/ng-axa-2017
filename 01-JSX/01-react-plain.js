const headerComponent = React.createElement(
    "h1",
    null,
    "Hello from React Component!"
);
const divComponent = React.createElement(
    "div",
    { className: "blue" },
    headerComponent
);

ReactDOM.render(
    divComponent,
    document.getElementById('component1')
);