document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll("#board div");
  const status = document.getElementById("status");

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

  squares.forEach((square, index) => {
    // Exercise 1
    square.classList.add("square");

    // Exercises 2 and 4
    square.addEventListener("click", () => {
      // Ignore occupied squares and clicks after a win.
      if (gameOver || boardState[index] !== "") {
        return;
      }

      boardState[index] = currentPlayer;
      square.textContent = currentPlayer;
      square.classList.add(currentPlayer);

      if (checkWinner(currentPlayer)) {
        status.textContent =
          `Congratulations! ${currentPlayer} is the Winner!`;

        status.classList.add("you-won");
        gameOver = true;
      } else {
        // Switch only when the game has not been won.
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });

    // Exercise 3
    square.addEventListener("mouseenter", () => {
      square.classList.add("hover");
    });

    square.addEventListener("mouseleave", () => {
      square.classList.remove("hover");
    });
  });
});