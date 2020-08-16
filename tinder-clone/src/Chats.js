import React from 'react'
import './Chats.css';
import Chat from './Chat';


function Chats() {
return (
        <div className="Chats">
            <Chat 
                name="Vinny"
                message="yo what's up"
                timeStamp="40 seconds ago"
                profilePic="https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2020-04/1280_vinny_guadagnino.jpg?h=50ade75b&itok=iUJpy-ox"

            />

            <Chat 
                name="Maria"
                message="yo what's up"
                timeStamp="69 seconds ago"
                profilePic="https://wikibioage.com/uploads/2020/06/maria-elizondo-26482.png"

            />

            <Chat 
                name="Pauly D"
                message="yo what's up"
                timeStamp="40 seconds ago"
                profilePic="https://media.allure.com/photos/5ea6fd97a6b4880008ca0f3b/16:9/w_2992,h_1683,c_limit/pauly-d-lede.jpg"

            />

            <Chat 
                name="Nikki"
                message="yo what's up"
                timeStamp="40 seconds ago"
                profilePic="https://akns-images.eonline.com/eol_images/Entire_Site/2019214/rs_634x951-190314085556-DoubleShotAtLove_01_22_19_NikkiHall_0076_CB_MED.JPG?fit=around|552:auto&output-quality=90&crop=552:auto;center,top"

            />
        </div>
    );

}
export default Chats;
