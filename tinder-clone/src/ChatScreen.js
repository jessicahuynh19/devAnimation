import React, { useState } from 'react';

function ChatScreen() {
    const [messages, setMessages] = useState ([
        {
            name: 'Vinny',
            image: '....',
            message: 'Whats up'
        },
        {
            message: 'Howdy',
        },
    ]);
    
    return (
        <div className="chatScreen">
            <p>YOU MATCHED WITH VINNY ON 08/15/2020 </p>
            {messages.map(message => (
                <div>
                    <p>{message.message}</p>
                </div>    
    
                
            )}
        </div>
    );
}

export default ChatScreen;
