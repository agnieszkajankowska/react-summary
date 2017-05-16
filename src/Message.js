import React from 'react'

class Message extends React.Component {
    render() {
        return (
            <div className="message-container">
                <h3>Message</h3>
                <p>Message title: {this.props.message.title}</p>
                <p>Message title: {this.props.message.content}</p>
                <p>Message title: {this.props.message.date}</p>
            </div>
        )
    }
}

export default Message
