let tg = window.Telegram.WebApp
const clickButton = document.querySelector('.clickButton')
const score = document.querySelector('.scoreText')

function clickButtonDown(e) {
    clickButton.style.backgroundColor = 'green'
    score.innerHTML = (parseInt(score.innerHTML)+1).toString()
    tg.HapticFeedback.impactOccurred('medium')
}
function clickButtonUp(e) {
    clickButton.style.backgroundColor = 'var(--tg-theme-button-color)'
}

// clickButton.addEventListener('mousedown', clickButtonDown)
clickButton.addEventListener('touchstart', clickButtonDown)

// clickButton.addEventListener('mouseup', clickButtonUp)
clickButton.addEventListener('touchend', clickButtonUp)
