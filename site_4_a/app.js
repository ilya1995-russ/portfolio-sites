const board = document.querySelector('#board')
const colors = ['#7CFC00', '#00FF00', '#32CD32', '#FFFF00', '#FFD700',
    '#FFA500', '#FF8C00', '#FF4500']
const SQUARES_NUMBER = 600

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () =>
        setColor(square))

    square.addEventListener('mouseleave', () =>
        removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getSqueresColor()
    element.style.backgroundColor = color
    element.style.boxSadow = `0 0 4px ${color}, 
    0 0 25px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxSadow = `0 0 2px #000`
}

function getSqueresColor(element) {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}



