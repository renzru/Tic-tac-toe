const Board = () => {
    const board = ['', '', '', '', '', '', '', '', ''];

    const toMatrix = (array, width) => {
        let matrix = [];
        let i, k;

        for (i = 0, k = -1; i < array.length; i++) {
            if (i % width === 0) {
                k++;
                matrix[k] = [];
            }

            matrix[k].push(array[i]);
        }

        return matrix;
    }

    return {
        board,
        toMatrix
    }
}

const Players = () => {
    this.hasWinner = false;

    function currentPlayer(round) {
        return (round % 2 === 1) ? 'X' : 'O';
    }

    return {
        hasWinner,
        currentPlayer
    }
}

const Game = () => {
    let board = Board();
    let playerBase = Players();
    const gameTile = document.querySelectorAll('.tile');

    let boardArray = board.board;
    let round = 1;

    function currentPlayer() {
        return playerBase.currentPlayer(round);
    }

    const playRound = (tile, sign, index) => {
        tile.innerHTML = sign;
        boardArray[index] = sign;
        disableTile(tile);

        if (round >= 3) checkWin(board, boardArray, playerBase);
        if (isDraw()) {
            setTimeout(() => alert(`It's a Draw!`), 100);
            setTimeout(() => Game().newGame(), 500);
        }

        round++;
    }

    function newGame() {
        board = Board();
        playerBase = Players();
        boardArray = board.board
        round = 1;

        resetTiles();
        generateTiles();
    }

    function resetTiles() {
        gameTile.forEach((tile) => {
            tile.innerHTML = '';
        });
    }

    function generateTiles() {
        gameTile.forEach((tile, index) => {
            tile.addEventListener('click', () => playRound(tile, currentPlayer(), index));
        });
    }

    function isDraw() {
        return round >= 9 && playerBase.hasWinner === false;
    }

    function disableTile(tile) {
        tile.replaceWith(tile.cloneNode(true));
    }

    function disableAllTiles() {
        gameTile.forEach((tile) => tile.replaceWith(tile.cloneNode(true)));
    }

    return {
        newGame,
        disableAllTiles
    }
}

const checkWin = (board, boardArray, playerBase) => {
    let boardMatrix = board.toMatrix(boardArray, 3);

    checkRows();
    checkColumns();
    checkDiagonal();
    checkAntiDiagonal();

    function checkRows() {
        boardMatrix.forEach((row) => {
            let sign = row[0];
            if (sign === '') return

            if (row[1] === sign && row[2] === sign) announceWin(sign);
        })
    }

    function checkColumns() {
        for (let i = 0; i < 2; i++) {
            let sign = boardMatrix[i][i];
            if (sign === '') return

            if (boardMatrix[0][i] === sign && boardMatrix[1][i] === sign && boardMatrix[2][i] === sign) announceWin(sign);
        }
    }

    function checkDiagonal() {
        let i = 0;
        let sign = boardMatrix[0][0];
        if (sign === '') return

        if (boardMatrix[0][i] === sign && boardMatrix[1][i + 1] === sign && boardMatrix[2][i + 2] === sign) announceWin(sign);
    }

    function checkAntiDiagonal() {
        let i = 0;
        let sign = boardMatrix[0][2];
        if (sign === '') return

        if (boardMatrix[2][i] === sign && boardMatrix[1][i + 1] === sign && boardMatrix[0][i + 2] === sign) announceWin(sign);
    }

    function announceWin(sign) {
        Game().disableAllTiles();
        playerBase.hasWinner = true;
        setTimeout(() => alert(`Player ${sign} Wins!`), 100);
        setTimeout(() => Game().newGame(), 500);
    }
}

Game().newGame();