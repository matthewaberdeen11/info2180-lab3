document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll("#board div");
  
  let currentPlayer = "X";
  const boardState = Array(9).fill("");

  squares.forEach((square, index) => {
    square.classList.add("square");

    // Exercise 2
    square.addEventListener("click", () => {
      // Do nothing if the square is already occupied.
      if (boardState[index] !== "") {
        return;
      }

      // Record and display the current player's move.
      boardState[index] = currentPlayer;
      square.textContent = currentPlayer;
      square.classList.add(currentPlayer);

      // Switch to the other player.
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
  });
});



exercise 2
