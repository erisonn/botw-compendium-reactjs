import React from 'react';
import CreatureFoodItem from './creatureFoodItem';

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
                    return false
            }).map(creature =>
                <CreatureFoodItem creature={creature} key={creature.id}/>
            )}
        </div>
    );
}
export default CreatureFood;