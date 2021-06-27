import React, { useState } from 'react';
import CreatureFood from './creatureFood'
import CreatureNonFood from './creatureNonFood'

//Componente Creatures: Responsável por renderizar condicionalmente os componentes CreatureFood e CreatureNonFood, de acordo com o click do user.
const Creatures = ({creaturesList, searchterm}) => {

    var [active, setActive] = useState(true)

    return ( 
        <div className="wrapper">
            <button className={active ? 'active':''} onClick={() => setActive(true)}>Creatures: Food</button>
            <button className={active ? '':'active'} onClick={() => setActive(false)}>Creatures: Non Food</button>
            {active ? <CreatureFood creaturesList={creaturesList} searchterm={searchterm} />: <CreatureNonFood creaturesList={creaturesList} searchterm={searchterm}/>}
        </div>
    );
}

export default Creatures;