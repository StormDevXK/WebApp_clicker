const WebSocket = require('ws')

const server = new WebSocket.Server({
    port: 5051,
})

let score = 0

server.on('connection', (ws) => {
    console.log('New connection')
    ws.send(score)
    // console.log(server.clients)
    ws.on('message', (message) => {
        if(JSON.parse(message) === 'plus') {
            score++
        }
        console.log(score)
        server.clients.forEach(el => el.send(score))
    })
})