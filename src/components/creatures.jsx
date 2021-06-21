import React, { useState } from 'react';

const Creatures = ({creaturesList}) => {
    var [active, setActive] = useState(true)
    return ( 
        <div className="wrapper">
            <a href="/#" className={active ? 'active':''} onClick={() => setActive(true)}>Creatures: Food</a>
            <a href="/#" className={active ? '':'active'} onClick={() => setActive(false)}>Creatures: Non Food</a>
            {active ? <CreatureFood creaturesList={creaturesList} />: <CreatureNonFood creaturesList={creaturesList}/>}
        </div>
    );
}

const CreatureFood = ({creaturesList}) => {
    return ( 
        <div className="creatures">
            {creaturesList.food.map(creature =>
                <div className="creature-item">
                    <h1>{creature.name.toUpperCase()}</h1>
                    <img src={creature.image} alt={creature.name} />
                    <p>{creature.description}</p>
                </div>
            )}
        </div>
    );
}

const CreatureNonFood = ({creaturesList}) => {
    return ( 
        <div className="creatures">
            {creaturesList.non_food.map(creature =>
                <div className="creature-item">
                    <h1>{creature.name.toUpperCase()}</h1>
                    <img src={creature.image} alt={creature.name} />
                    <p>{creature.description}</p>
                </div>
            )}
        </div>
    );
}
 
export default Creatures;