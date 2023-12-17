import React from 'react'
import './Input.css'


const Input = ({ sendMessage, Setmessage, message }) => {
    return (
        <form className='form' onSubmit={(event) => sendMessage(event)}>
            <input
                className='input'
                type="text"
                placeholder='Type a message....'
                onChange={(event) => Setmessage(event.target.value)}
                onKeyDown={event => event.key == 'Enter' ? sendMessage(event) : null} />
            <button className='sendButton' onClick={(event) => sendMessage(event)}>
                Send
            </button>
        </form>
    ) 
}

export default Input
