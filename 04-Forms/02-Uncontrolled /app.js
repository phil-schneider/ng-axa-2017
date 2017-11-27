class AppComponent extends React.Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <label>
                    Is going:
                    <input
                        ref={elem => this.isGoing = elem}
                        type="checkbox"
                        defaultChecked={this.props.initialIsGoing}
                    />
                </label>
                <br/>
                <label>
                    Number of guests:
                    <input
                        ref={elem => this.numberOfGuests = elem}
                        type="number"
                        defaultValue={this.props.initialNumberOfGuests}
                    />
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        );
    }

    submitForm(e) {
        e.preventDefault();
        console.log(this.numberOfGuests.value);
    };
}


const app = <AppComponent initialNumberOfGuests={42} initialIsGoing={true}/>;

ReactDOM.render(
    app,
    document.getElementById('root')
);
