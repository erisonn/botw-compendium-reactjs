import React, { useState, useEffect } from 'react';
import Monsters from './monsters'
import Equipments from './equipments'
import Materials from './materials'
import Treasures from './treasures'
import Header from './header'


// parent 
const Main = () => {

    function fetchAPI(url) {
        let request = new XMLHttpRequest();
        request.open("GET", url, false);
        request.send();
        return request.responseText
    }
    //fetch na sessão 'monsters' da API e converte para JSON
    
    var [monstersList, setmonsterList] = useState([])

    useEffect(() => {
        const API_URL = 'https://botw-compendium.herokuapp.com/api/v2/category/monsters'
        var monsters = fetchAPI(API_URL);
        var monsters_data = JSON.parse(monsters);
        setmonsterList(monsters_data.data)
    }, [])

    //fetch na sessão 'equipments' da API e converte para JSON
    
    var [equipmentsList, setequipmentList] = useState([])
    
    useEffect(() => {
        const API_URL = 'https://botw-compendium.herokuapp.com/api/v2/category/equipment'
        var equipments = fetchAPI(API_URL);
        var equipments_data = JSON.parse(equipments);
        setequipmentList(equipments_data.data)
    }, [])

    //fetch na sessão 'materials' da API e converte para JSON

    var [materialsList, setmaterialsList] = useState([])

    useEffect(() => {
        const API_URL = 'https://botw-compendium.herokuapp.com/api/v2/category/materials'
        var materials = fetchAPI(API_URL);
        var materials_data = JSON.parse(materials);
        setmaterialsList(materials_data.data)
    }, [])
    //fetch na sessão 'treasures' da API e converte para JSON

    var [treasuresList, settreasuresList] = useState([])

    useEffect(() => {
        const API_URL = 'https://botw-compendium.herokuapp.com/api/v2/category/treasure'
        var treasures = fetchAPI(API_URL);
        var treasures_data = JSON.parse(treasures);
        settreasuresList(treasures_data.data)
    }, [])

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