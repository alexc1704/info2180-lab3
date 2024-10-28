document.addEventListener("DOMContentLoaded", () => {
    const board = document.querySelector("#board");
    const squares = board.querySelectorAll("div");
    
    // Add class to each square
    squares.forEach(square => {
        square.classList.add("square");

        
        square.addEventListener("click", () => {
            if (!square.classList.contains("square--filled")) {
                square.classList.add("square--filled");
                square.classList.add(currentPlayer);
                square.textContent = currentPlayer;
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                
                checkWin();
            }
        });

        
        square.addEventListener("mouseenter", () => square.classList.add("hover"));
        square.addEventListener("mouseleave", () => square.classList.remove("hover"));
    });
    
    let currentPlayer = "X";

    function checkWin() {
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
        winningCombinations.forEach(combo => {
            const [a, b, c] = combo;
            if (squares[a].textContent && squares[a].textContent === squares[b].textContent && squares[a].textContent === squares[c].textContent) {
                document.getElementById("status").textContent = `Congratulations! ${squares[a].textContent} is the Winner!`;
                document.getElementById("status").classList.add("you-won");
            }
        });
    }

    document.querySelector(".btn").addEventListener("click", () => {
        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O", "square--filled");
        });
        currentPlayer = "X";
        const status = document.getElementById("status");
        status.textContent = "Welcome to Tic Tac Toe!";
        status.classList.remove("you-won");
    });
});