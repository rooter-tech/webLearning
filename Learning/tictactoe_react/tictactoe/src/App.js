import "./App.css";
import { useEffect, useState } from "react";

const now = new Date().toLocaleTimeString();
function App() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState("");
  function markCellMouse(e) {
    console.log("index", e);
    let symbol = count % 2 === 0 ? "X" : "O";
    if (!e.target.innerText) {
      setCount(count + 1);
      e.target.innerText = symbol;
    } else {
      alert("Box is already marked! Choose another box to continue");
    }
    checkWinner(setResult);
  }
  return (
    <div className="App">
      <div class="center">
        <h1> {result} </h1>
        <div class="screen">
          <h2>Game Screen : {count}</h2>
          <br />
          {new Array(3).fill(0).map((v, index1) => {
            return (
              <div className="mat">
                {new Array(3).fill(0).map((v, index2) => {
                  return (
                    <div
                      className={(count === 0 ? "active" : "", "cell")}
                      data-index={index2}
                      onClick={(e) => markCellMouse(e, index1 + "," + index2)}
                    >
                      {/* {index1 + "," + index2} */}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <ControlApp />
      </div>
    </div>
  );
}

function ControlApp() {
  const [time, setTime] = useState(now);
  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = new Date().toLocaleTimeString();
      setTime(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div class="screen">
      <h2>Current Time : {time}</h2>
      <h2>Game Controls</h2>
      <div class="control-button-parent">
        <button
          id="up"
          onClick={(e) => {
            move("up");
          }}
        >
          UP
        </button>
        <button
          onClick={(e) => {
            move("down");
          }}
          id="down"
        >
          DOWN
        </button>
        <button
          id="left"
          onClick={(e) => {
            move("left");
          }}
        >
          LEFT
        </button>
        <button
          id="right"
          onClick={(e) => {
            move("right");
          }}
        >
          RIGHT
        </button>
      </div>
      <div class="game-button-parent">
        <button
          id="cross"
          onClick={(e) => {
            mark("X");
          }}
        >
          CROSS
        </button>
        <button
          id="circle"
          onClick={(e) => {
            mark("O");
          }}
        >
          CIRCLE
        </button>
      </div>
    </div>
  );
}

let currentIndex = 0;

function updateActiveCell() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell, index) => {
    if (index === currentIndex) {
      cell.classList.add("active");
    } else {
      cell.classList.remove("active");
    }
  });
}

function move(direction) {
  checkWinner();
  const row = Math.floor(currentIndex / 3);
  const col = currentIndex % 3;
  switch (direction) {
    case "up":
      if (row > 0) currentIndex -= 3;
      break;
    case "down":
      if (row < 2) currentIndex += 3;
      break;
    case "left":
      if (col > 0) currentIndex -= 1;
      break;
    case "right":
      if (col < 2) currentIndex += 1;
      break;
  }
  updateActiveCell();
}

function mark(symbol) {
  const cells = document.querySelectorAll(".cell");
  const cell = cells[currentIndex];
  if (!cell.textContent) {
    cell.textContent = symbol;
  } else {
    alert("Box is already marked!Choose another Box to continue");
  }
  checkWinner();
}

function checkWinner(setResult) {
  const cells = document.querySelectorAll(".cell");
  const grid = Array.from(cells).map((cell) => cell.textContent);
  const winninglogic = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let combination of winninglogic) {
    const [a, b, c] = combination;
    if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
      setResult(`Team ${grid[a]} wins! Refresh to restart.`);
      alert(`Team ${grid[a]} wins! Refresh to restart.`);
      return;
    }
  }
  if (grid.every((cell) => cell)) {
    setResult("It's a Tie!!");
    alert("It's a tie! Refresh to restart.");
  }
}

export default App;
