import { Component } from "react";
import { connect } from "react-redux";

class TodoListContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                <li>a</li>
            </ul>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        list: state.todos
    }
}

export default connect(mapStateToProps)(TodoListContainer);
