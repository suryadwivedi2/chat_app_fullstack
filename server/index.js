const express = require('express')
const path = require('path')
const cors = require('cors')
const socketio = require('socket.io')
const http = require('http')
require('dotenv').config({ path: '../.env' });

const app = express();
app.use(cors());
const server = http.createServer(app)
const io = socketio(server, { cors: { origin: "*" } })


io.on('connection', (socket) => {
    console.log(`we have a new connection`)

    socket.on('join', ({ name, room }) => {
        console.log(name, room)
       
    })

    socket.on('disconnect', () => {
        console.log('user has disconnected');
    })

})

const port = process.env.PORT;

server.listen(port, () => console.log(`server running on port ${port}`))