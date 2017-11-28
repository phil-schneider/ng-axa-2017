import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ToDoDetail extends Component {
    render() {
        return (
            <div>
                <h3>Detail for {this.props.match.params.id}</h3>
                <div>
                    <Link to="/">
                        back
                    </Link>
                </div>
                <form className="new-todo">
                    Not yet implemented ...
                </form>
            </div>
        );
    }
}

ToDoDetail.propTypes = {};

export default ToDoDetail;
