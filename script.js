

function gameBoard() {
    const board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    
//render gameboard
    const gameContainer = document.querySelector('.gameContainer')
    const renderBoard = () => {
        for (let i = 0; i < board.length; i++) {
            const gameDiv = document.createElement('div')
            gameDiv.setAttribute('id', i)
            gameDiv.classList.add('gameStyle')
            gameContainer.appendChild(gameDiv);
            gameDiv.addEventListener('click', e => {
                console.log(e.target.id);
            });
        }
    }
    renderBoard();
};

//get position

gameBoard();

