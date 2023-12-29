import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const winnerLogic = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  const checkWinner = () => {
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleSquareClick = (index) => {
    if (squares[index] || checkWinner()) {
      return;
    }
    const newSquares = [...squares];
    newSquares[index] = isXTurn ? "X" : "O";
    setSquares(newSquares);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsXTurn(true);
  };

  const winner = checkWinner();

  return (
    <div className="container">
      {winner ? (
        <>
          {winner} won{"   "}
          <button onClick={handleReset}>Play Again</button>
        </>
      ) : (
        <>
          <h4> Player {isXTurn ? "X" : "O"} Turn</h4>
          {[0, 3, 6].map((start, row) => (
            <div key={row} className="row">
              {[0, 1, 2].map((col) => (
                <Square
                  key={col}
                  value={squares[start + col]}
                  onClick={() => handleSquareClick(start + col)}
                />
              ))}
            </div>
          ))}
          <button onClick={handleReset}>Refresh</button>
        </>
      )}
    </div>
  );
};

export default Board;
