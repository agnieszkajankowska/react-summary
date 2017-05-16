import React from 'react'
import Message from './Message'


const messageData = [
    {
        "title": "Message title 1",
        "content": "Once upon a time there was....",
        "date": "13 of July"
    },
    {
        "title": "Message title 2",
        "content": "Once upon a time there wasfffffffffff....",
        "date": "17 of July"
    },
    {
        "title": "Message title 3",
        "content": "Once upon a time there was kjgfojdfsjg hasdfguighf....",
        "date": "20 of July"
    }
]

class Messages extends React.Component {

    render() {
        return (
            <div className="messages-container">
                <h1>Messages</h1>
                <Message message={messageData[0]} />
                <Message message={messageData[1]} />
                <hr/>
                {
                    messageData.map((message, index) =>
                        <Message message={message} key={index}/>
                    )
                }
            </div>
        )
    }
}

export default Messages
