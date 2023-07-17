const cell0 = document.getElementById('0')
const cell1 = document.getElementById('1')
const cell2 = document.getElementById('2')
const cell3 = document.getElementById('3')
const cell4 = document.getElementById('4')
const cell5 = document.getElementById('5')
const cell6 = document.getElementById('6')
const cell7 = document.getElementById('7')
const cell8 = document.getElementById('8')
const cell9 = document.getElementById('9')
const namen = document.getElementById('namen')
const nameValue = document.getElementById('nameValue')
const results = document.getElementById('results')
const cells = document.querySelectorAll('.gameDiv')
const resetButton = document.getElementById('resetButton')

const playerFactory = (sign, name) => {
  return {sign, name};
};

const player1 = playerFactory('X', '');
const player2 = playerFactory('O', '');
let turn = true;
let sign = '';
let winnerDeclared = false;

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

function getName() {
    tempName = player2.name;
    if (player1.name == '') {
        player1.name = nameValue.value;
        nameValue.value = '';
    } else if (player1.name !== '' && player2.name == '') {
        player2.name = nameValue.value;
        nameValue.value = '';
    } else if (player1.name !== '' && player2.name !== ''){
        nameValue.value = '';
        results.innerHTML = 'There are already two players.'
        setTimeout(clearBox, 3000)
    }
}

function clearBox() {
    results.innerHTML = '';
}

namen.addEventListener('click', getName);

resetButton.addEventListener('click', resetTable)

function updateCell(id) {
    if (gameBoard[id] == 'X' | gameBoard[id] == 'O') {
        return;
    }else {
        gameBoard.splice(id, 1, determineMark(id))
    };
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
        winnerDeclared = false;
    console.log(gameBoard)
};

function determineMark(e) {
    if (turn == true && gameBoard[e] === '') {
        sign = 'X';
        turn = false;
    } else if (turn == false && gameBoard[e] === '') {
        sign = 'O';
        turn = true;
    }
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
    if (winnerDeclared == true) {
        return;
    } else if (cell0.innerHTML !== ''  && cell0.innerHTML == 'X' && cell1.innerHTML == cell2.innerHTML && cell0.innerHTML == cell1.innerHTML) {
    results.innerText = `${player1.name} wins!`;
    winnerDeclared = true;
    } else if (cell3.innerHTML !== ''  && cell3.innerHTML == 'X' && cell4.innerHTML == cell3.innerHTML && cell5.innerHTML == cell3.innerHTML) {
    results.innerText = `${player1.name} wins!`;
    winnerDeclared = true;
    } else if (cell6.innerHTML !== ''  && cell6.innerHTML == 'X' && cell7.innerHTML == cell6.innerHTML && cell8.innerHTML == cell7.innerHTML) {
    results.innerText = `${player1.name} wins!`;
    winnerDeclared = true;
    } else if (cell0.innerHTML !== ''  && cell0.innerHTML == 'X' && cell3.innerHTML == cell0.innerHTML && cell6.innerHTML == cell3.innerHTML) {
    results.innerText = `${player1.name}'s win!`;
    winnerDeclared = true;
    } else if (cell1.innerHTML !== ''  && cell1.innerHTML == 'X' && cell4.innerHTML == cell1.innerHTML && cell7.innerHTML == cell4.innerHTML) {
    results.innerText = `${player1.name} wins!`;
    winnerDeclared = true;
    } else if (cell2.innerHTML !== ''  && cell2.innerHTML == 'X' && cell5.innerHTML == cell2.innerHTML && cell8.innerHTML == cell5.innerHTML) {
    results.innerText = `${player1.name} wins!`;
    winnerDeclared = true;
    } else if (cell0.innerHTML !== ''  && cell0.innerHTML == 'X' && cell4.innerHTML == cell0.innerHTML && cell0.innerHTML == cell8.innerHTML) {
    results.innerText = `${player1.name} wins!`;
    winnerDeclared = true;
    } else if (cell2.innerHTML !== ''  && cell2.innerHTML == 'X' && cell4.innerHTML == cell2.innerHTML && cell2.innerHTML == cell6.innerHTML) {
    results.innerText = `${player1.name} wins!`;
    winnerDeclared = true;
    }  else if (cell0.innerHTML !== ''  && cell0.innerHTML == 'X' && cell1.innerHTML == cell2.innerHTML && cell0.innerHTML == cell1.innerHTML) {
    results.innerText = `${player1.name.name} wins!`;
    winnerDeclared = true;
    } else if (cell0.innerHTML !== ''  && cell0.innerHTML == 'O' && cell1.innerHTML == cell2.innerHTML && cell0.innerHTML == cell1.innerHTML) {
    results.innerText = `${player2.name} wins!`;
    winnerDeclared = true;
    } else if (cell3.innerHTML !== ''  && cell3.innerHTML == 'O' && cell4.innerHTML == cell3.innerHTML && cell5.innerHTML == cell3.innerHTML) {
    results.innerText = `${player2.name} wins!`;
    winnerDeclared = true;
    } else if (cell6.innerHTML !== ''  && cell6.innerHTML == 'O' && cell7.innerHTML == cell6.innerHTML && cell8.innerHTML == cell7.innerHTML) {
    results.innerText = `${player2.name} wins!`;
    winnerDeclared = true;
    } else if (cell0.innerHTML !== ''  && cell0.innerHTML == 'O' && cell3.innerHTML == cell0.innerHTML && cell6.innerHTML == cell3.innerHTML) {
    results.innerText = `${player2.name} wins!`;
    winnerDeclared = true;
    } else if (cell1.innerHTML !== ''  && cell1.innerHTML == 'O' && cell4.innerHTML == cell1.innerHTML && cell7.innerHTML == cell4.innerHTML) {
    results.innerText = `${player2.name} wins!`;
    winnerDeclared = true;
    } else if (cell2.innerHTML !== ''  && cell2.innerHTML == 'O' && cell5.innerHTML == cell2.innerHTML && cell8.innerHTML == cell5.innerHTML) {
    results.innerText = `${player2.name} wins!`;
    winnerDeclared = true;
    } else if (cell0.innerHTML !== ''  && cell0.innerHTML == 'O' && cell4.innerHTML == cell0.innerHTML && cell0.innerHTML == cell8.innerHTML) {
    results.innerText = `${player2.name} wins!`;
    winnerDeclared = true;
    } else if (cell2.innerHTML !== ''  && cell2.innerHTML == 'O' && cell4.innerHTML == cell2.innerHTML && cell2.innerHTML == cell6.innerHTML) {
    results.innerText = `${player2.name} wins!`;
    winnerDeclared = true;
    }  else if (cell0.innerHTML !== ''  && cell0.innerHTML == 'O' && cell1.innerHTML == cell2.innerHTML && cell0.innerHTML == cell1.innerHTML) {
    results.innerText = `${player2.name} wins!`;
    winnerDeclared = true;
    } else if(cell0.innerHTML !== '' && cell1.innerHTML !== '' && cell2.innerHTML !== '' && cell3.innerHTML !== '' && cell4.innerHTML !== '' && cell5.innerHTML !== '' && cell6.innerHTML !== '' && cell7.innerHTML !== '' && cell8.innerHTML !== ''){
        results.innerText = 'Tie';
        winnerDeclared = true;
    }
};

