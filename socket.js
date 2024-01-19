const WebSocket = require('ws')
const https = require('https')
const fs = require('fs')

const sserv = https.createServer({
    key: fs.readFileSync('./.ssl/private.pem'),
    cert: fs.readFileSync('./.ssl/cert.pem'),
})

const server = new WebSocketServer({ sserv })

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

sserv.listen(5051)
