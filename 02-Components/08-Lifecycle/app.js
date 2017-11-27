const Title = (props) => <h1>{props.title}</h1>;

class Clock extends React.Component {
    render() {
        const displayTime = moment(this.props.time).add(this.props.hourOffset, 'h').toString();
        return (
            <h3>
                {displayTime}
            </h3>
        );
    }

    componentWillMount(){console.log('Clock lifecycle:componentWillMount')}
    componentDidMount(){console.log('Clock lifecycle:componentDidMount')}
    componentWillReceiveProps(nextProps){console.log('Clock lifecycle:componentWillReceiveProps', nextProps)}
    componentWillUpdate(nextProps, nextState){console.log('Clock lifecycle:componentWillUpdate', nextProps, nextState)}
    componentDidUpdate(prevProps, prevState){console.log('Clock lifecycle:componentDidUpdate', prevProps, prevState)}
    componentWillUnmount(){console.log('Clock lifecycle:componentWillUnmount')}
};

class AppComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            countries: ['France', 'Germany', 'Italy', 'India', 'Indonesia', 'Switzerland', 'Sweden'],
            showContent: true
        };
    }

    render() {
        return (
            <div>
                <Title title={this.props.title}/>
                <div>
                    <button onClick={this.refreshTime.bind(this)}>Refresh</button>
                    <button onClick={this.handleToggle}>Toggle</button>
                </div>
                <br/>
                {
                    this.state.showContent &&
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

    refreshTime(){
        this.setState({time: new Date()});
    }

    handleToggle = () => this.setState({showContent: !this.state.showContent});

    componentWillMount(){console.log('App lifecycle:componentWillMount')}
    componentDidMount(){console.log('App lifecycle:componentDidMount')}
    componentWillReceiveProps(nextProps){console.log('App lifecycle:componentWillReceiveProps', nextProps)}
    componentWillUpdate(nextProps, nextState){console.log('App lifecycle:componentWillUpdate', nextProps, nextState)}
    componentDidUpdate(prevProps, prevState){console.log('App lifecycle:componentDidUpdate', prevProps, prevState)}
    componentWillUnmount(){console.log('App lifecycle:componentWillUnmount')}
}

const app = <AppComponent title="Greetings"/>;


ReactDOM.render(
    app,
    document.getElementById('root')
);

// DEMO:
// - Move loading of countries into componentDidMount
