import React, { useState } from "react";
import ReactDOM from "react-dom";

const themes = [
  { player1: "X", player2: "O" },
  { player1: "🔥", player2: "💧" },
  { player1: "🔴", player2: "🔵" },
  { player1: "🌞", player2: "🌜" },
  { player1: "🌸", player2: "🍀" },
  { player1: "⬛", player2: "⬜" },
  { player1: "⭐", player2: "🌙" },
  { player1: "0", player2: "1" },
];

const ThemeSelector = ({ setTheme, disabled }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-3 text-xl">
    <h3>Select Theme :</h3>
    <div className="grid grid-cols-4 gap-y-3 justify-center mb-4">
      {themes.map((theme, index) => (
        <button
          key={index}
          onClick={() => !disabled && setTheme(theme)}
          className={`mx-2 p-2 border rounded ${disabled ? "bg-gray-300" : "bg-gray-100 hover:bg-gray-200"}`}
          disabled={disabled}
        >
          {theme.player1} vs {theme.player2}
        </button>
      ))}
    </div>
    </div>
  );
};

const Modal = ({ message, reset }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl mb-4">{message}</h2>
        <button onClick={reset} className="bg-green-500 text-white p-2 rounded">
          Reset
        </button>
      </div>
    </div>,
    document.body
  );
};

const Field = () => {
  const [grid, setGrid] = useState(Array(9).fill(""));
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [theme, setTheme] = useState(themes[0]);
  const [gameStarted, setGameStarted] = useState(false);
  const [message, setMessage] = useState("");

  const complete = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (grid) => {
    for (let i = 0; i < complete.length; i++) {
      const [a, b, c] = complete[i];
      if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
        setGameOver(true);
        setMessage(`Game Over! Winner: ${count % 2 === 0 ? theme.player1 : theme.player2}`);
        return true;
      }
    }
    return false;
  };

  const checkDraw = (grid) => {
    if (grid.every(cell => cell) && !checkWinner(grid)) {
      setGameOver(true);
      setMessage("Game Over! It's a draw!");
      return true;
    }
    return false;
  };

  const toggle = (index) => {
    if (lock || grid[index] || gameOver) return;

    setGameStarted(true);

    const newGrid = grid.slice();
    newGrid[index] = count % 2 === 0 ? theme.player1 : theme.player2;
    setGrid(newGrid);
    setCount(count + 1);

    if (!checkWinner(newGrid)) {
      checkDraw(newGrid);
    } else {
      setLock(true);
    }
  };

  const reset = () => {
    setGrid(Array(9).fill(""));
    setCount(0);
    setLock(false);
    setGameOver(false);
    setGameStarted(false);
    setMessage("");
  };

  return (
    <div className="flex-1">
      <ThemeSelector setTheme={setTheme} disabled={gameStarted} />
      <table id="grid" className="flex align-center justify-center mb-8">
        <tbody className="p-4 w-[330px] flex justify-center flex-col align-center border border-green-300 rounded-2xl">
          {Array(3)
            .fill(null)
            .map((_, rowIndex) => (
              <tr key={rowIndex} className="flex h-[100px] m-1">
                {Array(3)
                  .fill(null)
                  .map((_, cellIndex) => {
                    const index = rowIndex * 3 + cellIndex;
                    return (
                      <td
                        key={cellIndex}
                        onClick={() => toggle(index)}
                        className="text-green-800 bg-green-100 w-1/3 h-[90px] border text-center pt-[23px] text-4xl rounded-lg shadow-lg shadow-green-500 m-1 hover:scale-105 hover:bg-yellow-200"
                      >
                        {grid[index]}
                      </td>
                    );
                  })}
              </tr>
            ))}
        </tbody>
      </table>
      {gameOver && <Modal message={message} reset={reset} />}
    </div>
  );
};

export default Field;
