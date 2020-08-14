import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
import './SwipeButtons.css';

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons_repeat">
            <ReplayIcon fontSize="large" />
            </IconButton>
            
            <IconButton className="swipeButtons_left">
            <CloseIcon fontSize="large" />
            </IconButton>
            
            <IconButton className="swipeButtons_star">
            <StarIcon fontSize="large" />
            </IconButton>
            
            <IconButton className="swipButtons_right">
            <FavoriteIcon fontSize="large" />
            </IconButton>
            
            <IconButton  className="swipeButtons_lightning">
            <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons;
 