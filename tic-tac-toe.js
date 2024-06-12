/*
import {Component}from "react";

class App extends Component{
  render(){
    return <h1>paragraph</h1>
  }
}
export default App; */

/* OR

function App(){
  return <h1>paragraph</h1>
}
   export default App;*/
 

  /*form
   function App(){
    return(
      <>
    <section>
      <form>
        <input type ="text"  ="Name" placeholder ="Enter your name" />< br />
        <input type ="tel"    placeholder ="Enter phone number"/><br />
        <input type="text"    placeholder ="Email" /><br />
        

          </form>
    </section>
</>
    ) 
  }
     export default App;
     */


// passing a prop to child component
/*
import { getImageUrl } from "./utils";
export default function Gallery () {
  return (
    <div>
      <h1> Friends</h1>
      <section className="profile">
        <h2>  Ross Geller</h2>
        <img
        className="avatar"
        src={getImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvonGvLicjcoxI63QT_vULnX2qwLQE2PqR0g&s")}
        width={100}
        height={100}
        />
        <ul>
          <li>
            <b>Profession</b>
            palaeontologist.

          </li>
          <li>
          <b>Marriage status:3</b>
          lord of rings
          </li>



        </ul>
      
      </section>
      <section

      className="profile">
        <h2>  Rachael Green</h2>
        <img
        className="avatar"
        src={getImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgDHHUF9qQFx3TEzpQoa_N9bElEr9W9sQSuaQdr_yaSsWvwLRbVzlRftwq4Nfpwt5JGg4&usqp=CAU")}
        width={100}
        height={100}
        />
        <ul>
          <li>
            <b>Profession</b>
          Retailer.

          </li>
          <li>
          <b>Marriage status:</b>
        Married
          </li>



        </ul>
      
      </section>
    </div>
  )
}
  // read prop inside child component
  */
 /*
 function Card({children, title}) {
  return(
    
      <div className="card">

      <div className="card-content">
        <h1>{title}</h1>
        {children}
        </div>
        </div>
  )
}
export default function Profile() {

return(
  <div>
  <Card title="profile">
         
        <img
        classname="avatar"
        src= "data:image/jpeg;base64,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"        alt="Rachael Green"
        width={150}
        height={150}
        />
        </Card>

        <Card title="About">
      
    
    

        <p>Rachel Karen Green is a fictional character, one of the six main characters who appeared in the American sitcom</p>
     </Card>
   
    </div>
  )
}
*/ v  



import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
