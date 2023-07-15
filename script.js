const cell0 = document.getElementById('0')
const cell1 = document.getElementById('1')
const cell2 = document.getElementById('2')
const cell3 = document.getElementById('3')
const cell4 = document.getElementById('4')
const cell5 = document.getElementById('5')
const cell6 = document.getElementById('6')
const cell7 = document.getElementById('7')
const cell8 = document.getElementById('8')
const cell9= document.getElementById('9')
const results = document.getElementById('results')
const cells = document.querySelectorAll('.gameDiv')
const resetButton = document.getElementById('resetButton')

const playerFactory = (sign) => {
  return {sign};
};

const player1 = playerFactory('x');
const player2 = playerFactory('o');
let turn;
let sign = '';

let gameBoard = ['','','',
                '','','',
                '','',''];


cells.forEach( function(element){
    element.addEventListener(`click`,function(e){
        updateCell(e.target.id);
        renderGameboard(e.target.id)
        checkWinner();
        console.log(gameBoard)
    });
});

resetButton.addEventListener('click', resetTable)

function updateCell(id) {
    gameBoard.splice(id, 1, determineMark(id))
};

function resetTable() {
    gameBoard = ['','','',
                '','','',
                '','',''];
        cell0.innerHTML = gameBoard[0];
        cell1.innerHTML = gameBoard[1];
        cell2.innerHTML = gameBoard[2];
        cell3.innerHTML = gameBoard[3];
        cell4.innerHTML = gameBoard[4];
        cell5.innerHTML = gameBoard[5];
        cell6.innerHTML = gameBoard[6];
        cell7.innerHTML = gameBoard[7];
        cell8.innerHTML = gameBoard[8];
        results.innerHTML = '';
    console.log(gameBoard)
};

function determineMark(e) {
    if(gameBoard[e] =='') {
        sign = 'X';
        turn = false;
    } else if (turn == gameBoard[e] == '') {
        sign = 'O';
        turn = false;
    };
    return sign;
};

function renderGameboard(e) {
    if (e == 0) {
        cell0.innerHTML = gameBoard[e];
    } else if (e == 1) {
        cell1.innerHTML = gameBoard[e];
    } else if (e == 2) {
        cell2.innerHTML = gameBoard[e];
    } else if (e == 3) {
        cell3.innerHTML = gameBoard[e];
    } else if (e == 4) {
        cell4.innerHTML = gameBoard[e];
    } else if (e == 5) {
        cell5.innerHTML = gameBoard[e];
    } else if (e == 6) {
        cell6.innerHTML = gameBoard[e];
    } else if (e == 7) {
        cell7.innerHTML = gameBoard[e];
    } else if (e == 8) {
        cell8.innerHTML = gameBoard[e];
    }
};

function checkWinner() {
    if (cell0.innerHTML !== ''  && cell1.innerHTML == cell2.innerHTML && cell0.innerHTML == cell1.innerHTML) {
    results.innerText = `${sign}'s win!`;
    }
};

