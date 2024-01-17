const clickButton = document.querySelector('.clickButton')
const score = document.querySelector('.scoreText')

const socket = new WebSocket('ws://192.168.3.15:5051')
// const socket = new WebSocket('ws://127.0.0.1:5051')
socket.addEventListener('open', () => {
    console.log('Соединение')
})

socket.addEventListener('message', (mes) => {
    score.innerHTML = mes.data
})

function clickButtonDown(e) {
    clickButton.style.backgroundColor = 'green'
    socket.send(JSON.stringify('plus'))
}
function clickButtonUp(e) {
    clickButton.style.backgroundColor = 'red'
}

// clickButton.addEventListener('mousedown', clickButtonDown)
clickButton.addEventListener('touchstart', clickButtonDown)

// clickButton.addEventListener('mouseup', clickButtonUp)
clickButton.addEventListener('touchend', clickButtonUp)