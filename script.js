const Board = () => {
    const gameBoard = ['', '', '', '', '', '', '', '', ''];

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
        gameBoard,
        toMatrix
    }
}

const getPlayer = (value, sign) => {
    this.winner = false;

    return {
        value,
        sign,
        winner
    }
}

const Players = () => {
    const playerX = getPlayer(0, 'X');
    const playerO = getPlayer(1, 'O');

    function currentPlayer(round) {
        return (round % 2 === 1) ? playerX : playerO;
    }

    return {
        playerX,
        playerO,
        currentPlayer,
    }
}

const Game = () => {
    let game = Board();
    let gameBoard = game.gameBoard;
    let round = 1;

    const playerBase = Players();
    const playerX = playerBase.playerX;
    const playerO = playerBase.playerO;

    const gameTile = document.querySelectorAll('.tile');

    gameTile.forEach((tile, index) => {
        tile.addEventListener('click', () => playRound(tile, currentPlayer(), index));
    })

    function currentPlayer() {
        return playerBase.currentPlayer(round);
    }

    const playRound = (tile, player, index) => {
        tile.innerHTML = player.sign;
        gameBoard[index] = player.value;
        disableTile(tile);

        if (round >= 3) checkWin();
        if (round >= 9) console.log('Draw!');
        round++;

        function checkWin() {
            let gameMatrix = game.toMatrix(gameBoard, 3);
            console.log(gameMatrix);

            gameMatrix.forEach((row) => {
                let value = row[0];
                if (value !== 0 && value !== 1) return
                if (row[1] === value && row[2] === value) {
                    announceWin(currentPlayer().sign);
                };
            })
        }

        function announceWin(winner) {
            console.log(`Player ${winner} Wins!`)
            disableAllTiles();
        }

        function disableAllTiles() {
            gameTile.forEach((tile) => tile.replaceWith(tile.cloneNode(true)));
        }

        function disableTile(tile) {
            tile.replaceWith(tile.cloneNode(true));
        }
    }
}

Game();