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
const cells = document.querySelectorAll('.gameDiv')


let gameBoard = ['x','','',
                '','','',
                '','',''];

document.addEventListener('click', function(e) {
    let content = (e.target.id);
    updateCell(content);
    console.log(gameBoard)
});

function updateCell(id) {
    gameBoard[id] = 'x';
}


