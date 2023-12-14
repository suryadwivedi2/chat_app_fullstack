const express=require('express')
const  path=require('path')
const cors=require('cors')
const socketio=require('socket.io')
const http=require('http')
require('dotenv').config({path:'../.env'});

const app=express();
const server=http.createServer(app)
//const io=socketio(server)

const port=process.env.PORT;

server.listen(port,()=>console.log(`server running on port ${port}`))