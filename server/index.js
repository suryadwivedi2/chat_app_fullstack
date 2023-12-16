const express = require('express')
const path = require('path')
const cors = require('cors')
const socketio = require('socket.io')
const http = require('http')
require('dotenv').config({ path: '../.env' });

const app = express();
app.use(cors());
const server = http.createServer(app)

const { addUser, getUser, removeUser, getUsersInRoom } = require('./users.js')

const io = socketio(server, { cors: { origin: "*" } })




io.on('connection', (socket) => {
    console.log(`we have a new connection`)

    socket.on('join', ({ name, room }, cb) => {
        const { error, user } = addUser({ id: socket.id, name, room })

        if (error) {
            return cb(error)
        }

        socket.emit('message', { user: 'admin', text: `${user.name} welcome to the room ${user.room}` })
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined` })
        socket.join(user.room)

        cb();
    })

    socket.on('addMessage', (message, callback) => {
        const user = getUser(user.id)
        io.to(user.room).emit('message',{ user:user.name,text: message})
        callback()
    })
    socket.on('disconnect', () => {
        console.log('user has disconnected');
    })

})

const port = process.env.PORT;

server.listen(port, () => console.log(`server running on port ${port}`))