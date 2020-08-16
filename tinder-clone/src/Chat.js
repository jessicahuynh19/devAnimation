import React from 'react';
import Avatar from '@material-ui/core/Avatar';

function Chat({ name, message, profilePic, timeStamp }) {
    return (
        <div className="chat">
            <Avatar className="chat_image" alt= {name} src= {profilePic} />

        </div>
    )
}

export default Chat;
