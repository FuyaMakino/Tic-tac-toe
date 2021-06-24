import React, { useState, useEffect } from "react";

import Square from "./Square";


export default function Board(/*{squares,onClick}*/props) {
    
    const rendSquare= (i:number) =>{
        return <Square value={props.squares[i]} onClick={()=>props.onClick(i)}/>;
    }

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {rendSquare(0)}
                {rendSquare(1)}
                {rendSquare(2)}
            </div>
            <div className="board-row">
                {rendSquare(3)}
                {rendSquare(4)}
                {rendSquare(5)}
            </div>
            <div className="board-row">
                {rendSquare(6)}
                {rendSquare(7)}
                {rendSquare(8)}
            </div>
        </div>
    );
}