const clickButton = document.querySelector('.clickButton')
const score = document.querySelector('.scoreText')

function clickButtonDown(e) {
    clickButton.style.backgroundColor = 'green'
    score.innerHTML = (parseInt(score.innerHTML)+1).toString()
}
function clickButtonUp(e) {
    clickButton.style.backgroundColor = 'red'
}

// clickButton.addEventListener('mousedown', clickButtonDown)
clickButton.addEventListener('touchstart', clickButtonDown)

// clickButton.addEventListener('mouseup', clickButtonUp)
clickButton.addEventListener('touchend', clickButtonUp)