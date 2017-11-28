class App extends React.Component {

    // The App component is a container component
    // It's primary focus is to manage the data and delegate the rendering to presentation components

    render() {
        return <ChampionList champions={this.state.champions} onLike={this.incrementLikeOnChampion}/>;
    }

    componentWillMount() {
        const initialChampions = loadChampions();
        this.setState({champions: initialChampions});
    }

    incrementLikeOnChampion = (champion) => {
        const championIndex = this.state.champions.indexOf(champion);
        if (championIndex >= 0) {

            // state should not be modified
            // -> create a new array with a new object
            const champions = [
                ...this.state.champions.slice(0, championIndex),
                {...champion, likes: champion.likes + 1},
                ...this.state.champions.slice(championIndex + 1)
            ];
            this.setState({
                champions
            });
        }
    };
}

/****** Presentation Components ******/

const ChampionList = ({champions, onLike}) => (
    <div className="pa3">
        <ListTitle title="Rate the Champions!"/>
        <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
            {champions.map((champion, index) =>
                <Champion champion={champion}
                          onLike={() => onLike(champion)}
                          key={index}/>
            )}
        </ul>
    </div>
);

const ListTitle = ({title}) => <h1 className="f4 bold center mw6">{title}</h1>;

const Champion = ({champion, onLike}) => (
    <li className="dt w-100 ph3 pv3 bb b--light-silver">
        <div className="dtc v-mid">
            <div>{champion.name}</div>
            <div className="pv2">👍 {champion.likes}</div>
        </div>
        <div className="dtc v-mid">
            <div className="tr">
                <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" onClick={onLike}>
                    Like!
                </button>
            </div>
        </div>
    </li>
);


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
