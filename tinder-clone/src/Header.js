import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom';

function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                <ArrowBackIosIcon fontSize="large" className="header_" />
                </IconButton>
            ): (
           
           <IconButton>
            <PersonIcon className="header_icon" fontSize="large" />
           </IconButton>
           
           )}
          
           
           <Link to="/">
            <WhatshotIcon fontSize="large" />
           </Link>
           
           <Link to="/chats">
           <IconButton> 
            <ForumIcon className="header_icon" fontSize="large" />
           </IconButton>
           </Link> 
        </div>
    )
}

export default Header;