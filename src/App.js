import React from 'react';
import SquareComponent from './SquareComponent';
import { useState } from 'react';

const initialState = ["", "", "", "", "", "","", "", ""];

function App() {
    const [gameState, setGameState] = useState(initialState);



    return (
        <div className="app-header">
            <p className="heading-text">React Tic Tac Toe - 2021</p>
            <div className="row jc-center">
                <SquareComponent className="b-bottom-right" state={gameState[0]}/>
                <SquareComponent className="b-bottom-right" state={gameState[1]}/>
                <SquareComponent className="b-bottom" state={gameState[2]}/>
            </div>
            <div className="row jc-center">
                <SquareComponent className="b-bottom-right" state={gameState[3]}/>
                <SquareComponent className="b-bottom-right" state={gameState[4]}/>
                <SquareComponent className="b-bottom" state={gameState[5]}/>
            </div>
            <div className="row jc-center">
                <SquareComponent className="b-right" state={gameState[6]}/>  
                <SquareComponent className="b-right" state={gameState[7]}/>
                <SquareComponent state={gameState[8]}/>
            </div>
            <button className="clear-button">Clear Game</button>
            <p>developed by Meruyert Karim</p>
        </div>
    );
}

export default App;
