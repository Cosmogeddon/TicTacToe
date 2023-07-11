(function() {
    const resetButton = document.getElementById('resetButton');
    const gameContainer = document.querySelector('#gameContainer');
    let gameBoard = ['', '', '',
                    '', '', '',
                    '', '', ''];

    const Player = (sign) => {
        return {sign};
    };

    (function gameController() {
        let playerX = Player('X');
        let playerO = Player('O');
        let round = false;

        return {playerX, playerO, round}
    })();
    function renderGameboard() {
        for (let i = 0; i < gameBoard.length; i++) {
            let gameDiv = document.createElement('div');
            gameDiv.className = 'gameDivs';
            gameContainer.appendChild(gameDiv);
        };

    };
    renderGameboard();
})();