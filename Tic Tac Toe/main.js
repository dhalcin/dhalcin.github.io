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

    return  { updteBroad, printBoard };

})();

const game = (() => {
    const player1 = Player('Player 1', 'X');
    const player2 = Player('Player 2', '0');

    let currentPlayer = player1;
    
    const addSymbol = (row, col) => {
        return Gameboard.updteBroad(row, col, currentPlayer['symbol']);
    }

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    const makeMove = () => {

    }

    return { addSymbol };
})();