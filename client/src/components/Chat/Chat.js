import { useState, useEffect } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import {io} from 'socket.io-client'
import './chat.css'

let socket;

const Chat = () => {
  const [name, Setname] = useState('');
  const [room, Setroom] = useState('');
  const location = useLocation();
  const ENDPOINT = 'localhost:5000'

 useEffect(()=>{
  const { name, room } = queryString.parse(location.search)
 socket = io(ENDPOINT);

    Setname(name)
    Setroom(room)

    console.log(socket)

    socket.emit('join',{name,room},)
    
return()=>{
  socket.emit('disconnect');
  socket.off();
}

 },[ENDPOINT,location.search])
 
  //ensures that useEffect only takes place when any of the values(as specified inside ) changes.

  return (
    <div>
      <h1>Chat</h1>
    </div>
  )
}

export default Chat
