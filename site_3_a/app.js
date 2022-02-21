const upBtn = document.querySelector('.up-button ')
const downBtn = document.querySelector('.down-button ')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const slideCount = mainSlide.querySelectorAll('div').length

let slideIndex = 0
sidebar.style.top = `-${(slideCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')

})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {
        slideIndex++
        if (slideIndex === slideCount) {
            slideIndex = 0
        }
    } else if (direction === 'down') {
        slideIndex--
        if (slideIndex < 0) {
            slideIndex = slideCount - 1
        }
    }
    const hieght = container.clientHeight
    mainSlide.style.transform = `translateY(-${slideIndex * hieght}px)`
    sidebar.style.transform = `translateY(${slideIndex * hieght}px)`
}
