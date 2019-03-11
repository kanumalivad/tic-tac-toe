import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
    render() {
        let clicked,turn;
        if(this.props.value == 'X')
            clicked = 'blue-click';
        else if(this.props.value == 'O') 
            clicked = 'orange-click';
        else
            turn = this.props.turn;
        return (
            <button className={`square ${turn} ${clicked}`} onClick={this.props.clickHandler}>
                {this.props.value}
            </button>
        );
    }
}
export default Square;