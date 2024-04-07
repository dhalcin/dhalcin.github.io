
function Player(name, symbol) {
    return { name, symbol}
}

const GameBoard = (() => {
    const board = [];

    const marker = {
        mark: ''
    };

    const getBoard = () => {
        return board;
    };

    const printBoard = () => {
        for (let i = 0; i < 9; i++) {
            board.push(marker)
        }
      return getBoard();  
    }

    printBoard();

    const updateBoard = (index, mark) => {
        board[index] = { mark };
    }

    return { board, getBoard, updateBoard }
})();

const GameController = (() => {
    const player1 = Player('Player 1', 'X');
    const player2 = Player('Player 2', 'O');
    let currentPlayer;

    const getPlayer = (callback) => {
        const playerOne = document.getElementById('player1');
        const playerTwo = document.getElementById('player2');

        playerOne.addEventListener('click', () => {
            currentPlayer = player1;
            callback(currentPlayer)
        });

        playerTwo.addEventListener('click', () => {
            currentPlayer = player2;
            callback(currentPlayer)
        });

    }

    const winConditions = [
        // Winning combinations by rows
        [0, 1, 2], // First row
        [3, 4, 5], // Second row
        [6, 7, 8], // Third row

        // Winning combinations by columns
        [0, 3, 6], // First column
        [1, 4, 7], // Second column
        [2, 5, 8], // Third row

        // Winning combinations by diagonals
        [0, 4, 8], // Main diagonal
        [2, 4, 6] // Secondary diagonal
    ];

    const verification = (index, symbol) => {
        let cell = GameBoard.getBoard();
        if (cell[index].mark === '') {
            GameBoard.updateBoard(index, symbol)
            return true;
        }   
    }

    const checkWin = () => {
        let board = GameBoard.getBoard();
        // Iterating ower the defined win conditions
        for (let i = 0; i < winConditions.length; i++) {
            let symbols = winConditions[i];
            // Verifying if all symbols in the specified positions indicate that there is a winner
            if (symbols.every(index => board[index].mark === 'X')) {
                    console.log('Player 1 is winner');
            }
        }
    }
 
    return { getPlayer, verification, checkWin };
})();

const Display = (() => {
    const board = GameBoard.getBoard();
    const divBoard = document.querySelector('.divBoard');
    let gameStarted = false;

    const divSquare = () => {
        let squares = [];
        board.forEach(() => {
            let square = document.createElement('div');
            square.classList.add('square');
            divBoard.appendChild(square);
            squares.push(square);
        })
        return squares;
    }

    const clickCell = (symbol) => {
        
        if (!gameStarted) {
            return; 
        }

        let cells = divSquare();
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', () => {
                console.log(symbol)
                // Checkin if the cell is empty
                // Get the child nodes of divBoard and check if the contain span
                let hasSpan = Array.from(cells[i].childNodes).some(node => node.nodeName === 'SPAN');
                if (!(hasSpan) && GameController.verification(i, symbol)) {
                    addSpan(cells[i], symbol);
                }
            });
        }
    }

    const addSpan = (cell, symbol) => {
        let span = document.createElement('span');
        span.textContent = symbol;
        cell.appendChild(span);
    }

    const startGame = () => {
        GameController.getPlayer((player) => {
            if (player === undefined) {
                console.log('choose a player');
            } else {
                gameStarted = true;
                clickCell(player.symbol)
            }
        });
    }

    return { startGame, divSquare, clickCell };
})();
Display.startGame();