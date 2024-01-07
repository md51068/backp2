import { useState } from "react";
import Card from "../card/card";
import "./grid.css"
import IsWinner from "../helpers/checkWinner";

function Grid({numberOfCards}){
    const [board,setboard]=useState(Array(numberOfCards).fill(""));
    const [turn,setTurn] =useState(true);
    const [winner,setWinner]=useState(null);
    
    function play(index){
        if(turn==true){
            board[index]="o";
        }else{
            board[index]="x";
        }
        const win =IsWinner(board,turn? "o":"x");
        if(win){
            setWinner(win);
        }
        setboard([...board]);
        setTurn(!turn)
    }

    function reset(){
        setTurn(true);
        setWinner(null);
        setboard(Array(numberOfCards).fill(""));
    }
    return(
        <div className="grid-wrapper">
            {   winner &&(
                <>
                   <h1 className="turn-highlight">winner is {winner}</h1>
                   <button className="reset" onClick={reset}>Reset Game</button>
                </>   
               )
            }
            <h1 className="turn-highlight">Current turn: {(turn)?'o':'x'}</h1>
            <div className="grid">
               {board.map((el, idx)=> <Card GameEnd={winner?true:false} key={idx} onPlay={play} player={el} index={idx}/>)}
            </div>
        </div>
    )
}


export default Grid;