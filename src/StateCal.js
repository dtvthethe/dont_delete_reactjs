import React, { Component } from 'react';

class StateCal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };
    }

    handleOnIncrement() {
        this.setState({
            value: this.state.value + 5
        });
    }

    render() {
        return (
            <div>
                <p>Gia tri = {this.state.value}</p>
                <br/>
                <button type="button" onClick={() => {this.handleOnIncrement()}}>Cong + 5</button>
            </div>
        );
    }
}

export default StateCal;
