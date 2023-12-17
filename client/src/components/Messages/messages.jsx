import React from 'react'
import './message.css'
import ScrolltoBottom from 'react-scroll-to-bottom'


const messages = ({ messages, name }) => {
    return (
        <div>
            <ScrolltoBottom>
                {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
            </ScrolltoBottom>
        </div>
    )
}

export default messages
