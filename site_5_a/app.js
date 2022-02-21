const start = document.querySelector('#startgame')
const screens = document.querySelectorAll('.screen')
const timeSpan = document.querySelector('#time')
const colors = ['#B22222', '#C71585', '#FF8C00', '#FFFACD', '#8A2BE2',
    '#00FFFF', '#4682B4', '#87CEEB']
const timeList = document.querySelector('#time-list')
const board = document.querySelector('#board')

let time = 0
let score = 0

start.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute
            ('data-time'))
        screens[1].classList.add('up')
        startGame()

    }
})
board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        RandomObject()
    }
})

//Debug
//startGame()


function startGame() {
    setInterval(decreaseTime, 1000)
    RandomObject()
    setTime(time)

}

function decreaseTime() {
    if (time === 0) {
        endGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }

}

function setTime(value) {
    timeSpan.innerHTML = `00:${value}`
}

function endGame() {
    timeSpan.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Ваш счет:<span
     class ="primary">${score}</span></h1>`
}

function RandomObject() {
    const object = document.createElement('div')
    const size = RandomNumber(10, 60)
    const { width, height } = board.getBoundingClientRect()
    const axisX = RandomNumber(0, width - size)
    const axisY = RandomNumber(0, height - size)
    const color = ObjectColor()

    object.classList.add('circle')
    object.style.background = `${color}`
    object.style.width = `${size}px`
    object.style.height = `${size}px`
    object.style.left = `${axisX}px`
    object.style.top = `${axisY}px`

    board.append(object)
}

function RandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)

}

function ObjectColor() {
    const i = Math.floor(Math.random() * colors.length)
    return colors[i]

}