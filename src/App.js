import React from 'react';
import SquareComponent from './SquareComponent';
import { useState } from 'react';

const initialState = ["", "", "", "", "", "","", "", ""];

function App() {
    const [gameState, setGameState] = useState(initialState);

    const onSquareClick = (index) => {
        
    }


    return (
        <div className="app-header">
            <p className="heading-text">React Tic Tac Toe - 2021</p>
            <div className="row jc-center">
                <SquareComponent className="b-bottom-right" state={gameState[0]} onClick={() => onSquareClick(0)}/>
                <SquareComponent className="b-bottom-right" state={gameState[1]} onClick={() => onSquareClick(1)}/>
                <SquareComponent className="b-bottom" state={gameState[2]} onClick={() => onSquareClick(2)}/>
            </div>
            <div className="row jc-center">
                <SquareComponent className="b-bottom-right" state={gameState[3]} onClick={() => onSquareClick(3)}/>
                <SquareComponent className="b-bottom-right" state={gameState[4]} onClick={() => onSquareClick(4)}/>
                <SquareComponent className="b-bottom" state={gameState[5]} onClick={() => onSquareClick(5)}/>
            </div>
            <div className="row jc-center">
                <SquareComponent className="b-right" state={gameState[6]} onClick={() => onSquareClick(6)}/>  
                <SquareComponent className="b-right" state={gameState[7]} onClick={() => onSquareClick(7)}/>
                <SquareComponent state={gameState[8]} onClick={() => onSquareClick(8)}/>
            </div>
            <button className="clear-button">Clear Game</button>
            <p>developed by Meruyert Karim</p>
        </div>
    );
}

export default App;
