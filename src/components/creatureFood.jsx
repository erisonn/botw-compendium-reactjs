import React from 'react';

//Componente CreatureFood: Responsável por renderizar os dados do objeto 'food' da entrada 'creatures' API, recebidos pelo componente Main.
const CreatureFood = ({creaturesList, searchterm}) => {
    
    return ( 
        <div className="creatures">
            {creaturesList.food.filter((val) => {
                if (searchterm === '') {
                    return val
                } else if (val.name.includes(searchterm)) {
                    return val
                }
            }).map(creature =>
                <div className="creature-item" key={creature.id}>
                    <h1>{creature.name.toUpperCase()}</h1>
                    <img src={creature.image} alt={creature.name} />
                    <p>{creature.description}</p>
                    <ul>
                        <li>Cooking Effect: {creature.cooking_effect}</li>
                        <li>Hearts Recovered: {creature.hearts_recovered}</li>
                        <ul>
                            Common Locations{creature.common_locations.map(location => <li key={creature.id + location}>{location}</li>)}
                        </ul>
                    </ul>
                </div>
            )}
        </div>
    );
}
export default CreatureFood;