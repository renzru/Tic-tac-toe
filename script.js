const Board = () => {
    const matrix = ['', '', '', '', '', '', '', '', ''];

    return {
        matrix
    }
}

const getPlayer = (player, sign) => {
    this.win = false;

    return {
        player,
        sign,
        win
    }
}

const Players = () => {
    const playerX = getPlayer(1, 'X');
    const playerO = getPlayer(2, 'O');

    function currentPlayer(a, b, c) {
        return (a % 2 === 1) ? b : c;
    }

    return {
        playerX,
        playerO,
        currentPlayer,
    }
}

const Game = () => {
    let game = Board();
    let round = 1;
    const playerBase = Players();
    const playerX = playerBase.playerX;
    const playerO = playerBase.playerO;

    console.log(playerX)
    const gameTile = document.querySelectorAll('.tile');

    gameTile.forEach((tile, index) => {
        tile.addEventListener('click', () => updateGame(tile, currentPlayer(), index));
    })

    function currentPlayer() {
        return playerBase.currentPlayer(round, playerX.sign, playerO.sign);
    }

    function updateGame(tile, sign, index) {
        tile.innerHTML = sign;
        disableTile(tile);

        game.matrix[index] = sign;
        console.log(game.matrix);
        round++;
        checkStatus();
    }

    function checkStatus() {
        if (round > 9) console.log('Game Finished');
    }

    function disableTile(tile) {
        tile.replaceWith(tile.cloneNode(true));
    }
}

Game();