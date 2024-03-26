function Player(name, symbol) {
    return { name, symbol };
}

const Gameboard = (() => {
    const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    const updteBroad = (row, col, symbol) => {
        return board[row][col] = symbol;
    };

    const printBoard = () => {
        for (let row of board) {
            console.log(row.join('  '));
        }
    }

    return  { board, updteBroad, printBoard };

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

    const winConditions = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];

    const checkWin = () => {
        for (let condition of winConditions) {
            let symbols = condition.map(([row, col]) => Gameboard.board[row][col]);
            let fristSymbol = symbols[0];
            if (fristSymbol && symbols.every(symbol => symbol === fristSymbol)) {
                if (fristSymbol === 'X') return currentPlayer = player1;
                if (fristSymbol === '0') return currentPlayer = player2;
            }
        }
        let cellOcuped = Gameboard.board.every(row => row.every(cell => cell));
        if (cellOcuped) {
            return 'draw';
        }

        return false;
    }

    const coord = () => {
        let inpt = prompt();
        let [row, col] = inpt.split('').map(cr => parseInt(cr));
        return { row, col };
    }
    
    const verification = (row, col) => {
        let elemnt = Gameboard.board[row][col];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if ((row === i && col === j) && (elemnt === 'X' || elemnt === '0')) return false;
            }
        } 
        return true;
    }

    const makeMove = () => {
        while (true) {
            let { row, col } = coord();
            
            if (!verification(row, col)) {
                continue;
            }
    
            addSymbol(row, col);
    
            if (checkWin()) {
                console.log(`¡${currentPlayer.name} gana el juego!`);
                break;
            }
    
            switchPlayer();
        }
    };       
        
    
    return { makeMove };
})();

GameController.makeMove();