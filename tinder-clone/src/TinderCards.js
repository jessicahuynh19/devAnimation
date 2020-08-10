import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';


function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'steve jobs',
            url: ''
        },
        {
            name: 'mark zuckerberg',
            url: ''
        }
    ]);
    
    
    return (
        <div>
            <h1>Tinder Cards</h1>

            {people.map(person = (
                <TinderCard>
                    <div className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    )
}

export default TinderCards
