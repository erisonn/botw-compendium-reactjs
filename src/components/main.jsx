import React, { useState, useEffect } from 'react';
import Monsters from './monsters'
import Equipments from './equipments'
import Materials from './materials'
import Treasures from './treasures'
import Header from './header'


// parent 
const Main = () => {

    
    //fetch na sessão 'monsters' da API e converte para JSON
    
    var [monstersList, setmonsterList] = useState([])

    useEffect(() => {
        fetchMonsters();
    }, [])

    const fetchMonsters = () => {
        fetch("https://botw-compendium.herokuapp.com/api/v2/category/monsters")
        .then(response => response.json())
        .then(responseText => setmonsterList(responseText.data))
    }

    //fetch na sessão 'equipments' da API e converte para JSON
    
    var [equipmentsList, setequipmentList] = useState([])
    
    useEffect(() => {
        fetchEquipments();
    }, [])

    const fetchEquipments = () => {
        fetch("https://botw-compendium.herokuapp.com/api/v2/category/equipment")
        .then(response => response.json())
        .then(responseText => setequipmentList(responseText.data))
    }

    //fetch na sessão 'materials' da API e converte para JSON

    var [materialsList, setmaterialsList] = useState([])

    useEffect(() => {
        fetchMaterials();
    }, [])

    const fetchMaterials = () => {
        fetch("https://botw-compendium.herokuapp.com/api/v2/category/materials")
        .then(response => response.json())
        .then(responseText => setmaterialsList(responseText.data))
    }
    //fetch na sessão 'treasures' da API e converte para JSON

    var [treasuresList, settreasuresList] = useState([])

    useEffect(() => {
        fetchTreasures();
    }, [])

    const fetchTreasures = () => {
        fetch("https://botw-compendium.herokuapp.com/api/v2/category/treasure")
        .then(response => response.json())
        .then(responseText => settreasuresList(responseText.data))
    }

    const [content, setContent] = useState('Monsters');

    if (content === 'Monsters') {
        return ( 
            <>
            <Header content={content} setContent={setContent}/>
            <Monsters monstersList={monstersList}/>             {/*passa o objeto da API como parametro para o componente child*/}
            </>
        );
    } 

    if (content === 'Equipments') {
        return (
            <>
            <Header content={content} setContent={setContent}/>
            <Equipments equipmentsList={equipmentsList}/>
            </>
        )
    }

    if (content === 'Materials') {
        return (
            <>
            <Header content={content} setContent={setContent}/>
            <Materials materialsList={materialsList}/>
            </>
        )
    }
    if (content === 'Treasures') {
        return (
            <>
            <Header content={content} setContent={setContent}/>
            <Treasures treasuresList={treasuresList}/>
            </>
        )
    }

}
 
export default Main;