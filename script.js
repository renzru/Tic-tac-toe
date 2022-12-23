const Board = () => {
    const matrix = ['', '', '', '', '', '', '', '', ''];

    return {
        matrix
    };
}

const Player = (sign) => {
    const getSign = () => {
        return sign;
    }

    return {
        getSign
    }
};

const Game = () => {
    const playerX = Player('X');
    const playerO = Player('O');

    const playRound = () => {

    }

    return {
        playerX,
        playerO,
        message
    };
}

const Display = () => {
    let game = gameBoard();

    const updateDisplay = () => {
        display.innerHTML = game.board;
        console.log('updateDisplay executed');
    }
}

Display();