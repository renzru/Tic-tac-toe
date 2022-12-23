const Board = () => {
    const matrix = ['', '', '', '', '', '', '', '', ''];

    return {
        matrix
    };
}

const Player = (sign) => {
    return {
        sign
    }
};

const Game = () => {
    playerX = Player('X');
    playerO = Player('O');

    const playRound = () => {
        return;
    }

    const selectSign = () => {

    }
    return {
        playerX,
        playerO
    };
}

const Display = () => {
    let game = Board();
    let round = 1;
    const players = Game();
    const player1 = players.playerX;
    const player2 = players.playerO;

    const gameTile = document.querySelectorAll('.tile');
    const optionX = document.querySelector('.optionX');
    const optionO = document.querySelector('.optionO');

    optionX.onclick = () => {}

    gameTile.forEach((tile, index) => {
        tile.addEventListener('click', () => updateDisplay(tile, getCurrentPlayer(), index));
    })

    const getCurrentPlayer = () => {
        if (round % 2 === 1) return player1.sign;
        else return player2.sign;
    }
    const updateDisplay = (tile, sign, index) => {
        tile.innerHTML = sign;
        game.matrix[index] = sign;
        round++;
        console.log(game.matrix);
    }
}

Display();