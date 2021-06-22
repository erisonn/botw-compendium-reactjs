import React from 'react';

const CreatureNonFood = ({creaturesList}) => {
    return ( 
        <div className="creatures">
            {creaturesList.non_food.map(creature =>
                <div className="creature-item" key={creature.id}>
                    <h1>{creature.name.toUpperCase()}</h1>
                    <img src={creature.image} alt={creature.name} />
                    <p>{creature.description}</p>
                </div>
            )}
        </div>
    );
}

export default CreatureNonFood;