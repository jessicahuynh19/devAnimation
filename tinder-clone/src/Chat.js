import React from 'react';
import './Chat.css';
import Avatar from '@material-ui/core/Avatar';

function Chat({ name, message, profilePic, timeStamp }) {
    return (
        <div className="chat">
            <Avatar className="chat_image" src= {profilePic} />
            <div className="chat_details">
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <p className="chat_timestamp">{timeStamp}</p>

        </div>
    );
}

export default Chat;
