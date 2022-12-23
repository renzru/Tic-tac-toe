const Board = () => {
    const matrix = ['', '', '', '', '', '', '', '', ''];

    return {
        matrix
    }
}

const Players = () => {
    const playerX = getSign('X');
    const playerO = getSign('O');

    function currentPlayer(a, b, c) {
        return (a % 2 === 1) ? b : c;
    }

    function getSign(sign) {
        return sign;
    }

    return {
        getSign,
        playerX,
        playerO,
        currentPlayer,
    }
}

const Game = () => {
    let game = Board();
    let round = 1;
    const playerBase = Players();
    const player1 = playerBase.playerX;
    const player2 = playerBase.playerO;

    const gameTile = document.querySelectorAll('.tile');

    gameTile.forEach((tile, index) => {
        tile.addEventListener('click', () => updateGame(tile, currentPlayer(), index));
    })

    function currentPlayer() {
        return playerBase.currentPlayer(round, player1, player2);
    }

    function updateGame(tile, sign, index) {
        tile.innerHTML = sign;
        disableTile(tile);

        game.matrix[index] = sign;
        console.log(game.matrix);
        round++;
    }

    function disableTile(tile) {
        tile.replaceWith(tile.cloneNode(true));
    }
}

Game();