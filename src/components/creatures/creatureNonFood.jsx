import React from 'react';
import CreatureNonFoodItem from './creatureNonFoodItem';

//Componente CreatureNonFood: Responsável por renderizar os dados do objeto 'non_food' da entrada 'creatures' API, recebidos pelo componente Main.
const CreatureNonFood = ({creaturesList, searchterm}) => {
    
    return ( 
        <div className="creatures">
            {creaturesList.non_food.filter((val) => {
                if (searchterm === '') {
                    return val
                } else if (val.name.includes(searchterm)) {
                    return val
                }
                    return false
            }).map(creature =>
                <CreatureNonFoodItem creature={creature} key={creature.id}/>
            )}
        </div>
    );
}

export default CreatureNonFood;