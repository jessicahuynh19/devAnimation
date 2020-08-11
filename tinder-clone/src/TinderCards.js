import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'marshmello',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEYcbhrtRoUbebD8t_10NYt3NkyoD4LJRwEQ&usqp=CAU'
        },    

        {
            name: 'Dillion Francis',
            url: 'https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2014/05/06235520/fNl7lJh0RhexB8Zf4uM9JWmZYhVdc9KTVwbDJtdy-972x597.jpeg'
        }
    ]);
    
    
    return (
        <div>
            <h1>Tinder Cards</h1>


            <div className="tinderCards__cardContainer">


            {people.map((person) => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up', 'down']}
                
                >
                   
                    <div  style= {{backgroundImage: `url(${person.url})`}}    
                    className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
