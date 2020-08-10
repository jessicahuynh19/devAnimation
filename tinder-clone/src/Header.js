import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import WhatshotIcon from '@material-ui/icons/Whatshot';

function Header() {
    return (
        <div className="header">
            <PersonIcon className="header_icon" fontSize="large" />
            <WhatshotIcon fontSize="large" />
            <ForumIcon className="header_icon" fontSize="large" />
        </div>
    )
}

export default Header;