const COUNTRIES = ['France', 'Germany', 'Italy', 'India', 'Indonesia', 'Switzerland', 'Sweden'];

const Spinner = () => (
    <div className="dot-spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
    </div>
);

const withLoadingSpinner = (Component) => (props) => {
    if(props.isLoading){
        return <Spinner/>;
    }
    else {
        return <Component {...props}/>;
    }
};

const Title = (props) => <h1>{props.title}</h1>;

const Clock = ({time, hourOffset}) => {
        const displayTime = moment(time).add(hourOffset, 'h').toString();
        return (
            <h3>
                {displayTime}
            </h3>
        );
};


const TitleWithLoadingSpinner = withLoadingSpinner(Title);
const ClockWithLoadingSpinner = withLoadingSpinner(Clock);

class AppComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: []
        };
    }

    render() {
        return (
            <div>
                <TitleWithLoadingSpinner title={this.state.title} isLoading={!this.state.title}/>
                <div>
                    <button onClick={this.refreshTime.bind(this)}>Refresh</button>
                </div>
                <br/>
                {
                    this.state.countries
                        .map((country, index) => (
                            <div key={index}>
                                Time in {country.name}: <ClockWithLoadingSpinner time={country.time} hourOffset={index} isLoading={!country.time}></ClockWithLoadingSpinner>
                            </div>
                        ))
                }
            </div>
        );
    }

    refreshTime = () => {
        this.loadCountries();
    };

    componentDidMount = () => {
        setTimeout(() => this.setState({title: 'World Clock'}), 1000);
        this.loadCountries();
    };

    loadCountries = () => {
        this.setState({countries: COUNTRIES.map(c => ({name: c, time: undefined}))});
        for (let countryName of COUNTRIES){
            const countryIndex = COUNTRIES.indexOf(countryName);
            setTimeout(() => {
                const updatedCountries = [
                    ...this.state.countries.slice(0, countryIndex),
                    {...this.state.countries[countryIndex], time: new Date()},
                    ...COUNTRIES.slice(countryIndex + 1).map(c => ({name: c, time: undefined}))
                ];
                this.setState({countries: updatedCountries});
            }, (countryIndex + 2) * 1000)
        }
    }
}


const app = <AppComponent/>;

ReactDOM.render(
    app,
    document.getElementById('root')
);

