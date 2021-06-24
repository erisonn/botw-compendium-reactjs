import React from 'react';

const CreatureNonFood = ({creaturesList}) => {
    return ( 
        <div className="creatures">
            {creaturesList.non_food.map(creature =>
                <div className="creature-item" key={creature.id}>
                    <h1>{creature.name.toUpperCase()}</h1>
                    <img src={creature.image} alt={creature.name} />
                    <p>{creature.description}</p>
                    <ul>
                        Common Locations 
                        {creature.common_locations === null || creature.common_locations.length === 0 ? 
                        <li>Hyrule</li> : creature.common_locations.map(location => <li key={location + creature.id}>{location}</li>)}
                        <ul>
                            Drops
                            {creature.drops === null || creature.drops.length ===0 ? 
                            <li>None</li>: creature.drops.map(drop => <li key={drop + creature.id}>{drop.charAt(0).toUpperCase() + drop.slice(1)}</li>)}
                        </ul>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default CreatureNonFood;