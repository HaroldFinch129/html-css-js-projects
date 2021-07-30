const X_CLASS = 'cross'
const O_CLASS = 'circle'
const COMBINATION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const board = document.getElementById('board')
const cells = document.querySelectorAll('.cell')
const result = document.getElementById('result')
const resultText = document.querySelector('.result-text')
const restartButton = document.getElementById('restartButton')

let turn // False x , True o

const swapTurn = () => { turn = !turn }
const placeMark = (cell, currentClass) => { cell.classList.add(currentClass) }
const placeHover = () => {
    board.classList.remove(X_CLASS)
    board.classList.remove(O_CLASS)
    if (turn) board.classList.add(O_CLASS)
    else board.classList.add(X_CLASS)
}


const endGame = (draw) => {
    if (draw) resultText.innerText = 'Beraberlik!'
}
























// End