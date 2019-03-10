import React, { Component } from 'react';
import './Score-board.css';

class ScoreBoard extends Component {
    
    render() {
        return (
            <div className='score-board-wrap'>
                <div className='score-item'>
                    <header className='p-one-header'>Player 1 (X)</header>
                    <div className='counts'>{this.props.counts.p1}</div>
                </div>
                <div className='score-item'>
                    <header className='p-one-header'>Player 2 (O)</header>
                    <div className='counts'>{this.props.counts.p2}</div>
                </div>
                <div className='score-item'>
                    <header className='p-one-header'>Tie</header>
                    <div className='counts'>{this.props.counts.tie}</div>
                </div>
            </div>
        );
    }
}
export default ScoreBoard;