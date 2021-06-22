import React, { useState } from 'react';
import CreatureFood from './creatureFood'
import CreatureNonFood from './creatureNonFood'

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

export default Creatures;