import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
    render() {
        return (
            <button className={`square btn-${this.props.no}`} onClick={this.props.clickHandler}>
                {this.props.value}
            </button>
        );
    }
}
export default Square;