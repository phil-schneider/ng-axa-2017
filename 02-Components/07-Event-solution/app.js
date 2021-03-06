const Title = (props) => <h1>{props.title}</h1>;

class Clock extends React.Component {

    state = {
        time: new Date()
    };

    render() {
        const displayTime = moment(this.state.time).add(this.props.hourOffset, 'h').toString();
        return (
            <div>
                <span>
                    {displayTime}
                </span>
                <button onClick={this.refreshTime.bind(this)}>Refresh!</button>
                <br/>
                <br/>
            </div>
        );
    }

    refreshTime() {
        this.setState({time: new Date()});
    }
}

class AppComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            countries: ['France', 'Germany', 'Italy', 'India', 'Indonesia', 'Switzerland', 'Sweden']
        };
    }

    render() {
        return (
            <div>
                <Title title={this.props.title}/>
                {/*<div>*/}
                {/*<button onClick={this.refreshTime.bind(this)}>Refresh</button>*/}
                {/*</div>*/}
                <br/>
                {
                    this.state.countries
                        .map((country, index) => (
                            <div key={index}>
                                Time in {country}: <Clock time={this.state.time} hourOffset={index}></Clock>
                            </div>
                        ))
                }
            </div>
        );
    }

    refreshTime() {
        this.setState({time: new Date()});
    }
}

const app = <AppComponent title="Greetings"/>;

ReactDOM.render(
    app,
    document.getElementById('root')
);


// DEMO:
// - skip binding `this` in handler
// - define handler method in constructor -> use arrow function /
// - define handler as class property (stage-2) -> use arrow function
// - add an input which filters by country -> event -> state:filter
// - show ref on input