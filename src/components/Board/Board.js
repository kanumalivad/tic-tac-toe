import React, { Component } from 'react';
import './Board.css';
import Square from '../Square/Square';
import { checkWinner, isTie} from '../utils/helper';
import ScoreBoard from '../Score-board/Score-board';

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squares : Array(9).fill(null),
            xIsNext : true,
            counts : {
                p1  : 0,
                p2  : 0,
                tie : 0,
            },
        };
    }

    renderSquare(i) {
        return (    
            <Square no = {i}
                    value = {this.state.squares[i]}
                    clickHandler = { () => this.handleClick(i)}
                    turn = {this.state.xIsNext ? 'blue' : 'orange'}
            />
        );
    }

    emptyBoard() {
        this.setState({squares : Array(9).fill(null)});
    }

    handleClick(i) {
        if( this.state.squares[i] === 'X' || this.state.squares[i] === 'O') {
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
        const winner = checkWinner(this.state.squares);
        let counts = this.state.counts;
        if(winner) {
            if(winner === 'X') {
                ++counts.p1;
            }
            else if(winner === 'O') {
                ++counts.p2;
            }
            this.emptyBoard();
            this.setState( {counts : counts} );
        } else if(isTie(this.state.squares)) {
            ++counts.tie;
            this.setState( {counts : counts} );
            this.emptyBoard();
        }
            
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

               <ScoreBoard counts={this.state.counts}/>
            </div>
        );
        
    }
}
export default Board;