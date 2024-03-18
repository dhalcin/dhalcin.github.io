function Player(name, symbol) {
    return { name, symbol };
}

const Gameboard = (() => {
    const board = [
        ['X', '', ''],
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
        return Gameboard.updteBroad(row, col, currentPlayer['symbol']);
    }

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
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
        let inpt = prompt('enter coordinate');
        let [row, col] = inpt.split('').map(cr => parseInt(cr));
        return { row, col };
    }
    const makeMove = () => {
        //let { row ,col } = coord();
        for (let i = 0; i < (Gameboard.board).length; i++) {
            const cells = Gameboard.board[i];
            //const cell = cells.map(rowCol => rowCol !== '');
            for (let j = 0; j < cells.length; j++) {
                console.log(cells[j]);
            }
             
        }
    }

    return { makeMove };
})();

GameController.makeMove();