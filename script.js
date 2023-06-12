

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
            gameDiv.setAttribute('data-index', i)
            gameDiv.classList.add('gameStyle')
            gameContainer.appendChild(gameDiv);
        }
    }
    const divs = document.querySelectorAll('[data-index]')
    console.log(divs)
    renderBoard();
};

gameBoard();

