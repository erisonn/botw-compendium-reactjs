import React, { useEffect } from 'react';
import Loading from '../loading';
import CreatureFoodItem from './creatureFoodItem';

//Componente CreatureFood: Responsável por renderizar os dados do objeto 'food' da entrada 'creatures' API, recebidos pelo componente Main.
const CreatureFood = ({fetchAPI, creaturesList, setcreaturesList, searchterm}) => {
    
    useEffect(() => {
        if (creaturesList.length === 0) {
            fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category/creatures', setcreaturesList);
        }
    }, [fetchAPI, creaturesList, setcreaturesList])

    return ( 
        <div className="creatures">
            {creaturesList.length === 0 ? <Loading/> : creaturesList.food.filter((val) => {
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