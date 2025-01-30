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

function checkWinner() {
    const cells = document.querySelectorAll(".cell");
    const grid = Array.from(cells).map(cell => cell.textContent);
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
            alert(`Team ${grid[a]} wins! Refresh to restart.`);
            return;
        }
    }
    if (grid.every(cell => cell)) {
        alert("It's a tie! Refresh to restart.");
    }
}


    document.getElementById("up").addEventListener("click", () => move("up"));
    document.getElementById("down").addEventListener("click", () => move("down"));
    document.getElementById("left").addEventListener("click", () => move("left"));
    document.getElementById("right").addEventListener("click", () => move("right"));
    document.getElementById("cross").addEventListener("click", () => mark("X"));
    document.getElementById("circle").addEventListener("click", () => mark("O"));
    updateActiveCell();
    checkWinner();