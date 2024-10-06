import { useState } from 'react';
import './style.scss'
import Board from './Components/Board';
import {calculateWinner} from './winner'

function App() {
  const[squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);
  const nextPlayer = isXNext ? 'X' : 'O';

  const statusMessage = winner ? `Winner is ${winner}`
  : `Next player is, ${nextPlayer}`;

  const handleSquareClick = clickdposition =>{
      //null, 'X', 'O'
      if(squares[clickdposition] || winner){
          return;
      } 
      setSquares((currentSquares)=>{
          return currentSquares.map((squarevalue, position)=>{
              if(clickdposition === position){
                  return isXNext ? 'X':'O';
              }
              return squarevalue;
          });
      });
  setIsXNext(currentIsXNext => !currentIsXNext);
  };


  return (
      <div className="app">
        <h2>{statusMessage}</h2>
        <Board squares={squares} handleSquareClick={handleSquareClick}/>
      </div>
  );
}

export default App;
