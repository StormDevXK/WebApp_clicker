const WebSocket = require('ws')
const https = require('https')
const fs = require('fs')

const server = new WebSocket.Server({
    port: 5051,
    key: fs.readFileSync(''),
    cert: fs.readFileSync(''),
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