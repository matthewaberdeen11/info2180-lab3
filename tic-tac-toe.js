document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll("#board div");
  const status = document.getElementById("status");
  const newGameButton = document.querySelector(".btn");

  const originalStatus = status.textContent;

  let currentPlayer = "X";
  let gameOver = false;

  const boardState = Array(9).fill("");

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // Exercise 4: check whether a player has won
  function checkWinner(player) {
    return winningCombinations.some((combination) => {
      const [a, b, c] = combination;

      return (
        boardState[a] === player &&
        boardState[b] === player &&
        boardState[c] === player
      );
    });
  }

  // Exercise 5: reset the game
  function resetGame() {
    currentPlayer = "X";
    gameOver = false;
    boardState.fill("");

    squares.forEach((square) => {
      square.textContent = "";
      square.classList.remove("X", "O", "hover");
    });

    status.textContent = originalStatus;
    status.classList.remove("you-won");
  }

  squares.forEach((square, index) => {
    // Exercise 1: style each board square
    square.classList.add("square");

    // Exercise 2: place an X or O
    square.addEventListener("click", () => {
      // Ignore occupied squares and clicks after a win.
      if (gameOver || boardState[index] !== "") {
        return;
      }

      boardState[index] = currentPlayer;
      square.textContent = currentPlayer;
      square.classList.add(currentPlayer);

      // Exercise 4: announce the winner
      if (checkWinner(currentPlayer)) {
        status.textContent =
          `Congratulations! ${currentPlayer} is the Winner!`;

        status.classList.add("you-won");
        gameOver = true;
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });

    // Exercise 3: add hover styling
    square.addEventListener("mouseenter", () => {
      square.classList.add("hover");
    });

    square.addEventListener("mouseleave", () => {
      square.classList.remove("hover");
    });
  });

  // Exercise 5: respond to the New Game button
  newGameButton.addEventListener("click", resetGame);
});