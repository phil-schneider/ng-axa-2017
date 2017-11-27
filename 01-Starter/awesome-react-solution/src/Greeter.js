import React, {Component} from 'react';

class Greeter extends Component {

    state = {
        transient: {
            name: ''
        },
        committed: {
            name: 'World'
        }
    };

    constructor(){
        super();
        this.commitChange = this.commitChange.bind(this);
    }

    render() {
        return (
            <div>
                <div>
                    <input value={this.state.transient.name}
                           type="text"
                           onChange={(e) => this.handleChange(e)}
                    />
                    <button onClick={this.commitChange}>
                        Update!
                    </button>

                </div>
                <p>
                    Hello {this.state.committed.name}
                </p>
            </div>
        );
    }

    handleChange(e) {
        const name = e.target.value;
        const newTransient = {...this.state.transient, name};
        this.setState({transient: newTransient, number: 42})
    }

    commitChange() {
        // const newCommitted = {...this.state.transient};

        this.setState({committed: this.state.transient})

    }
}

export default Greeter;