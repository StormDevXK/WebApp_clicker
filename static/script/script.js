const clickButton = document.querySelector('.clickButton')
const score = document.querySelector('.scoreText')

//const wsAdr = 'ws://' + window.location.hostname + ':5051'
//console.log(wsAdr)
//const socket = new WebSocket(wsAdr)
const socket = new WebSocket('ws://ws.stormdevxk.ru:5051')
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
