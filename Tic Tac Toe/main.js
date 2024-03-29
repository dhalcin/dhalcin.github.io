function Player(name, symbol) {
    return { name, symbol };
}

const Gameboard = (() => {
    const board = [
        ['X', '', ''],
        ['X', '', ''],
        ['X', '', '']
    ];

    const getBoard = () => board;

    const updteBroad = (row, col, symbol) => {
        return board[row][col] = symbol;
    };

    const printBoard = () => {
        for (let row of board) {
            console.log(row.join(' | '));
        }
    }

    return  { getBoard, updteBroad, printBoard };

})();

const GameController = (() => {
    const player1 = Player('Player 1', 'X');
    const player2 = Player('Player 2', '0');
    
    let currentPlayer = player1;

    const addSymbol = (row, col) => {
        Gameboard.updteBroad(row, col, currentPlayer['symbol']);
        return Gameboard.printBoard();
    }

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        while (true) {
            let { row, col } = coord();
            if (verification(row, col)) {
                addSymbol(row, col);
                currentPlayer = player1;
                break;
            }
        }
    };

    /* Array containing possible winning combinations in tic-tac-toe game.
       Each subarray represents a winning combination, where each element is
       a coordinate [row, column] on the game board*/

    const winConditions = [
        // Winning combinations by rows
        [[0, 0], [0, 1], [0, 2]], // First row
        [[1, 0], [1, 1], [1, 2]], // Second row
        [[2, 0], [2, 1], [2, 2]], // Third row

        // Winning combinations by columns
        [[0, 0], [1, 0], [2, 0]], // First column
        [[0, 1], [1, 1], [2, 1]], // Second column
        [[0, 2], [1, 2], [2, 2]], // Third column

        // Winning combinations by diagonals
        [[0, 0], [1, 1], [2, 2]], // Main diagonal
        [[0, 2], [1, 1], [2, 0]]  // Secondary diagonal
    ];

    const checkWin = () => {
        for (let condition of winConditions) {
            // Extact symbols from the game board based on the current condition
            let symbols = condition.map(([row, col]) => Gameboard.board[row][col]);
            let fristSymbol = symbols[0];

            // Check if all symbols in the current condition are the same
            if (fristSymbol && symbols.every(symbol => symbol === fristSymbol)) {
                return fristSymbol === 'X' ? player1 : player2;
            }
        }
        let cellOcuped = Gameboard.board.every(row => row.every(cell => cell));
        if (cellOcuped) return 'draw';
    }

    const coord = () => {
        let inpt = prompt();
        let [row, col] = inpt.split('').map(cr => parseInt(cr));
        return { row, col };
    }
    
    // Function to verify if a cell is empty or already occupied
    const verification = (row, col) => {
        let elemnt = Gameboard.board[row][col];

        // Iterate through each cell on the game board
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // Check if the current cell matches the specified row and column, and if it's already occupied
                if ((row === i && col === j) && (elemnt === 'X' || elemnt === '0')) return false;
            }
        } 
        return true;
    }   

    const handleWin = () => {
        let winner = checkWin();
        if (winner) {
            console.log(winner === 'draw' ? 'draw' : `¡${winner.name} has won the game!`);
            return true;
        }
        return false;
    };
    

    const makeMove = () => {
        while (true) {
            // Get the coordinate selected by the player
            let { row, col } = coord();
            
            // Check if the coordinates are valid
            if (!verification(row, col)) continue;
    
            addSymbol(row, col);
    
            // Check for a winner after adding the symbol
            if (handleWin()) break;
    
            switchPlayer();

            if (handleWin()) break;
        }
    
    };       
          
    return { verification, makeMove };
})();

const Display = (() => {
    const board = Gameboard.getBoard();
    const divBoard = document.querySelector('.divBoard');

    const divSquare = () => {
        let squares = [];
        board.forEach(arry => {
            arry.forEach(() => {
                let square = document.createElement('div');
                square.classList.add('square');
                divBoard.appendChild(square);
                squares.push(square);
            });
        })
        return squares;
    }

    const clickCell = () => {
        
        const cells = divSquare(); 

        console.log(cells);

        /**
         *for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', () => {
                
        })
        }
         */
    }

    return { clickCell };
})();

Display.clickCell();

