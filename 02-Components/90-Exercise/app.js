class App extends React.Component {

    render() {
        return (
            <div className="pa3">
                <h1 className="f4 bold center mw6">Rate the Champions!</h1>
                <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
                    {this.state.champions.map((champion, index) =>
                        <li className="dt w-100 ph3 pv3 bb b--light-silver" key={index}>
                            <div className="dtc v-mid">
                                <div>{champion.name}</div>
                                <div className="pv2">👍 {champion.likes}</div>
                            </div>
                            <div className="dtc v-mid">
                                <div className="tr">
                                    <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" >
                                        Like!
                                    </button>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        )
    }

    componentWillMount() {
        const initialChampions = loadChampions();
        this.setState({champions: initialChampions});
    }

}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

function loadChampions() {
    return [
        {name: 'Katniss', likes: 0},
        {name: 'Peeta', likes: 0},
        {name: 'Johanna', likes: 0},
        {name: 'Haymich', likes: 0},
    ];
}
