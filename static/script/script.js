let tg = window.Telegram.WebApp
const clickButton = document.querySelector('.clickButton')
const score = document.querySelector('.scoreText')

const wsAdr = 'ws://' + window.location.hostname + ':5051'
//console.log(wsAdr)
const socket = new WebSocket(wsAdr)
// const socket = new WebSocket('ws://localhost:5051')
socket.addEventListener('open', () => {
    console.log('Соединение')
})

socket.addEventListener('message', (mes) => {
    score.innerHTML = mes.data
})

function clickButtonDown(e) {
    clickButton.style.backgroundColor = 'green'
    socket.send(JSON.stringify('plus'))
    tg.HapticFeedback.impactOccurred('medium')
    score.innerHTML = (parseInt(score.innerHTML)+1).toString()
}
function clickButtonUp(e) {
    clickButton.style.backgroundColor = 'var(--tg-theme-button-color)'
}

// clickButton.addEventListener('mousedown', clickButtonDown)
clickButton.addEventListener('touchstart', clickButtonDown)

// clickButton.addEventListener('mouseup', clickButtonUp)
clickButton.addEventListener('touchend', clickButtonUp)
