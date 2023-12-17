import { useState, useEffect } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { io } from 'socket.io-client'
import './chat.css'
import InfoBar from '../InfoBar/InfoBar.jsx'
import Input from '../Input/Input.jsx'
import Messages from '../Messages/messages.jsx'

let socket;

const Chat = () => {
  const [name, Setname] = useState('');
  const [room, Setroom] = useState('');
  const [message, Setmessage] = useState([]);
  const [messages, Setmessages] = useState([]);
  const location = useLocation();
  const ENDPOINT = 'localhost:5000'

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)
    socket = io(ENDPOINT);

    Setname(name)
    Setroom(room)

    console.log(socket)

    socket.emit('join', { name, room }, () => {

    })

    return () => {
      socket.emit('disconnect');
      socket.off();
    }

  }, [ENDPOINT, location.search])   //ensures that useEffect only takes place when any of the values(as specified inside ) changes.

  useEffect(() => {
    socket.on('message', (message) => {
      Setmessages([...messages, message])
    })
  }, [messages])

  //function for sending messages

  const sendMessage = async (event) => {
    await event.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => sendMessage(''))
    }
  }

  console.log(message, messages);

  return (
    <div className='outerContainer'>
      <div className='container'>
        <InfoBar room={room} />
        <Messages  messages={messages} name={name}/>
        <Input Setmessage={Setmessage} message={message} sendMessage={sendMessage} />
      </div>
    </div>
  )
}

export default Chat
