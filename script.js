let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const statusText = document.querySelector(".status");
const cells = document.querySelectorAll(".cell");

function makeMove(index) {
    if (board[index] === "" && gameActive) {
        board[index] = currentPlayer;
        cells[index].innerText = currentPlayer;
        if (checkWin()) {
            statusText.innerText = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (board.includes("")) {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            statusText.innerText = `Player ${currentPlayer}'s turn`;
        } else {
            statusText.innerText = "It's a Draw!";
            gameActive = false;
        }
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    statusText.innerText = "Player X's turn";
    cells.forEach(cell => cell.innerText = "");
}
