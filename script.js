(function() {
    const resetButton = document.getElementById('resetButton');
    const gameContainer = document.querySelector('#gameContainer');

    let gameBoard = ['', '', '',
                    '', '', '',
                    '', '', ''];

    (function reset() {
        document.addEventListener('click', (event)=> {
            gameBoard = ['', '', '',
            '', '', '',
            '', '', ''];
            removeGameboard();
            renderGameboard();
        })
    })();

    const Player = (sign) => {
        return {sign};
    };

    function playerMaker() {
        let playerX = Player('X');
        let playerO = Player('O');
        let round = false;

        return {playerX, playerO, round}
    };

    

    function renderGameboard() {
        for (let i = 0; i < gameBoard.length; i++) {
            let gameDiv = document.createElement('div');
            gameDiv.className = 'gameDivs';
            gameDiv.innerText = gameBoard[i];
            gameDiv.id = [i];
            gameContainer.appendChild(gameDiv);
            getID();
        };
    };

    function removeGameboard() {
        while (gameContainer.hasChildNodes()) {
            gameContainer.removeChild(gameContainer.lastChild)
        }
    };
    let winner = () => {
        if (gameBoard[0] !== '' && gameBoard[1] == gameBoard[2] && gameBoard[2] == gameBoard[0]){
            alert('You Win')
        };
      };

    renderGameboard();

    function getID() {
        document.addEventListener('click',(event)=>{
            let cellID = event.target.getAttribute('id');
            if (gameBoard[cellID] == ''){
               if(playerMaker.round === false) {
                  gameBoard.splice(cellID, 1, 'X')
                  playerMaker.round = true;
                  removeGameboard();
                  renderGameboard();
                } else {
                   gameBoard.splice(cellID, 1, 'O')
                   playerMaker.round = false;
                   removeGameboard();
                   renderGameboard();
                };
            console.log(gameBoard);}
            else {
                getID();
            };

    })};

})();