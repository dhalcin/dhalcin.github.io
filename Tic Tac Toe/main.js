
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
    let player1;
    let player2;
    let currentPlayer;
    const playerOne = document.getElementById('player1');
    const playerTwo = document.getElementById('player2');
    const players = document.querySelector('.players');
    const startGame = document.getElementById('startGame');
    const displayDiv = document.querySelector('.display');

    playerOne.focus();
    const getPlayer = (callback) => {
        startGame.addEventListener('click', e => {
            e.preventDefault();
            players.style.display = 'none'

            player1 = getPlayerInfo(playerOne, 'X');
            player2 = getPlayerInfo(playerTwo, 'O');

            currentPlayer = player1;
            
            callback();
        });

    }

    const getPlayerInfo = (playerInput, symbol) => {
        const playerName = playerInput.value !== '' ? playerInput.value : playerInput.placeholder;
        return Player(playerName, symbol);
    }

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        displayDiv.innerHTML = `<p>Turn : ${currentPlayer.symbol}</p>`
        if (currentPlayer.symbol === 'O') displayDiv.innerHTML = `<p>This is : ${player1.name}'s turn!</p>`;
        if (currentPlayer.symbol === 'X') displayDiv.innerHTML = `<p>This is : ${player2.name}'s turn!</p>`;
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
        let hasWinner = false;
        for (let i = 0; i < winConditions.length; i++) {
            let symbols = winConditions[i];
            let firstSymbol = symbols[0];
            let cellSymbol = board[firstSymbol].mark;
            if (symbols.every(index => board[index].mark === cellSymbol && cellSymbol !== '')) {
                cellSymbol = cellSymbol === 'X' ? player1 : player2;
                displayDiv.innerHTML = `<p>Player ${cellSymbol.name} won!</p>`;
                hasWinner = true;
                break;
            }
        }
        if (!hasWinner) {
            if (board.every(cell => cell.mark !== '')) {
                displayDiv.innerHTML = `<p>This is a draw</p>`;
                return true;
            }
        }
    
        return hasWinner;
    }
 
    return { getPlayer, switchPlayer, verification, checkWin };
})();

const Display = (() => {
    const board = GameBoard.getBoard();
    const divBoard = document.querySelector('.divBoard');
    const restart = document.getElementById('Restart');
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
        let flag = true;
        for (let i = 0; i < squares.length; i++) {
            squares[i].addEventListener('click', () => {
                if (flag) {
                    player = GameController.switchPlayer();
                    // Checkin if the cell is empty
                    // Get the child nodes of divBoard and check if the contain span
                    let hasSpan = Array.from(squares[i].childNodes).some(node => node.nodeName === 'SPAN');
                    if (!(hasSpan) && GameController.verification(i, player.symbol)) {
                        addSpan(squares[i], player.symbol);
                        if (GameController.checkWin()) {
                            flag = false;
                        }
                    }
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
            divBoard.style.display = 'grid';
            restart.style.display = 'grid'
            divSquare();
            clickCell();
        })
    }

    restart.addEventListener('click', () => location.reload());    

    return { startGame };
})();

Display.startGame();