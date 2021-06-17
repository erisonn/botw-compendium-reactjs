import React, { useState } from 'react';
import Monsters from './monsters'
import Equipments from './equipments'
import Header from './header'


// parent 
const Main = () => {

    const [content, setContent] = useState('Monsters');

    function ShowEquipment () {
        setContent('Equipments')
    }
    function ShowMonsters () {
        setContent('Monsters')
    }

    if (content === 'Monsters') {
        return ( 
            <>
            <Header ShowEquipment={ShowEquipment} ShowMonsters={ShowMonsters}/>
            <Monsters/>
            </>
        );
    } 

    if (content === 'Equipments') {
        return (
            <>
            <Header ShowEquipment={ShowEquipment} ShowMonsters={ShowMonsters}/>
            <Equipments/>
            </>
        )
    }

}
 
export default Main;