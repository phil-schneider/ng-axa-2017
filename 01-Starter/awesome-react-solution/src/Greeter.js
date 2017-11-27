import React, {Component} from 'react';

class Greeter extends Component {

    constructor() {
        super();
        this.state = {name: 'World'};
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" onChange={(e) => this.handleChange(e)}/>
                </div>
                <p>
                    Hello {this.state.name}
                </p>
            </div>
        );
    }

    handleChange(e) {
        this.setState({name: e.target.value})
    }
}

export default Greeter;