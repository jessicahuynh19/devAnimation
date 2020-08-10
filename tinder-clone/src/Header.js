import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import IconButton from '@material-ui/core/IconButton'

function Header() {
    return (
        <div className="header">
           <IconButton>
            <PersonIcon className="header_icon" fontSize="large" />
           </IconButton>
           
            <WhatshotIcon fontSize="large" />
           
           <IconButton>
            <ForumIcon className="header_icon" fontSize="large" />
           </IconButton>
        </div>
    )
}

export default Header;