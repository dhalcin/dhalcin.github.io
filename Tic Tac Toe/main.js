
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
        const divPlayers = document.querySelector('.players');

        playerOne.addEventListener('click', () => {
            currentPlayer = player1;
            callback(currentPlayer)
            divPlayers.style.display = 'none';
        });

        playerTwo.addEventListener('click', () => {
            currentPlayer = player2;
            callback(currentPlayer)
            divPlayers.style.display = 'none';
        });

    }

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        return currentPlayer;
    }

    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
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
 
    return { getPlayer, switchPlayer, verification, checkWin };
})();

const Display = (() => {
    const board = GameBoard.getBoard();
    const divBoard = document.querySelector('.divBoard');
    let squares = [];

    const divSquare = () => {
        board.forEach(() => {
            let square = document.createElement('div');
            square.classList.add('square');
            divBoard.appendChild(square);
            squares.push(square);
        })
        return squares;
    }

    const clickCell = () => {
        let player = GameController.switchPlayer();
        for (let i = 0; i < squares.length; i++) {
            squares[i].addEventListener('click', () => {
                player = GameController.switchPlayer();
                // Checkin if the cell is empty
                // Get the child nodes of divBoard and check if the contain span
                let hasSpan = Array.from(squares[i].childNodes).some(node => node.nodeName === 'SPAN');
                if (!(hasSpan) && GameController.verification(i, player.symbol)) {
                    addSpan(squares[i], player.symbol);
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
        GameController.getPlayer(() => {
            divSquare();
            clickCell()
        });
    }

    return { startGame, divSquare, clickCell };
})();

Display.startGame();