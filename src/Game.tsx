import React, { useState, useEffect } from "react";

import Board from "./Board";


export default function Game() {
    const [history,setHistory]=useState([{squares:Array(9).fill(null)}]);
    const [stepNum,setStepNum]=useState(0);
    const [putNext, setPutNext] = useState(true);
    
    const handleClick= (i:number) =>{
        const historyElement=history.slice(0,stepNum+1);
        const current= history[historyElement.length-1];
        const squares= current.squares.slice();

        if(judgeWinner(squares) || squares[i])return;

        squares[i] = putNext?"A":"B";

        setHistory(historyElement.concat({squares:squares}));
        setStepNum(historyElement.length);
        setPutNext(!putNext);
    };
    const jumpTo =(step) =>{
        setStepNum(step);
        setPutNext(step%2===0);
    };
    const historyElement=history;
    const current=historyElement[stepNum];
    const winner = judgeWinner(current.squares);
    let status;
    if(winner){
        status = "Winner:" + winner;
    }else{
        status = "Next player:" + (putNext? "A":"B");
    }
    const moves=history.map((step,move)=>{
        const d=move? "Goto move #" + move : "Go to game start";
        return (
            <li key={move}>
                <button onClick={()=> jumpTo(move)}>{d}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={current.squares} onClick={(i) => handleClick(i)}/>
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

function judgeWinner(squares){
    //勝利パターン
    const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for(let i:number=0; i<lines.length;i++){
        const [a,b,c]= lines[i];
        if(squares[a]==squares[b] && squares[b]==squares[c] && squares[c]==squares[a])return squares[a];
    }
    return null;
}


