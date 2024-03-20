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
        console.log(currentPlayer);
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
            if (symbols.every(symbol => symbol === 'X') || symbols.every(symbol => symbol === '0')) {
                return console.log(`Win`);
            }
        }
        return console.log(`Not winers`);
    }

    const coord = () => {
        let inpt = prompt('enter');
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

    }
    
    return { makeMove };
})();

GameController.makeMove();