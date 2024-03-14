
function Player(name, symbol) {
    return { name, symbol }
}

// Method to create a table
function Gameboard() {
    // * Matrix to represent the board
    const board = [
        ['X', '0', ''],
        ['', 'X', ''],
        ['', '0', 'X']
    ];

    const printBoard = () => {
        for (let row of board) {
            console.log(row.join(' | '));
        }
    };

    return { board, printBoard };
}

function GameController() {
    const player1 = Player('Player 1', 'X');
    const player2 = Player('Player 2', '0');

    // * Current turn, starts with player 1
    let currentPlayer = player1;
    const gameInstance = Gameboard();

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    // Method for movement on the board
    const makeMove = (row, col) => {
        if (gameInstance.board[row][col] === '') {
            switchPlayer();
            return true;
        }
        return false;
    }

    return { makeMove };
}

const game = GameController();
game.makeMove(0, 0);