

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
            let getId = ''
            gameDiv.setAttribute('id', i)
            gameDiv.classList.add('gameStyle')
            gameContainer.appendChild(gameDiv);
            gameDiv.addEventListener('click', e => {
            board[e.target.id] = 'x';
            console.log(board);
            })
        }
    }
    renderBoard();
};

//get position

gameBoard();

