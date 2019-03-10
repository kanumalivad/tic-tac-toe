import React, { Component } from 'react';
import './Board.css';
import Square from '../Square/Square';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares : Array(9).fill(null),
            xIsNext : true,
        };
    }

    renderSquare(i) {
        return (    
            <Square no = {i}
                    value = {this.state.squares[i]}
                    clickHandler = { () => this.handleClick(i)} 
            />
        );
    }

    handleClick(i) {
        if(this.state.squares[i] == 'X' || this.state.squares[i] == 'O') {
            return;
        } else {
            const squares = this.state.squares.slice();
            squares[i] = this.state.xIsNext ? 'X' : 'O';

            this.setState ( {
                squares : squares,
                xIsNext : !this.state.xIsNext,
            });
        }
    }

    render() {
        return (
           <div className='board'>
               <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
               </div>
               <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
               </div>
               <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
               </div>
           </div>
        );
    }
}
export default Board;