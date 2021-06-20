import React, { useState, useEffect } from 'react';
import Monsters from './monsters'
import Equipments from './equipments'
import Materials from './materials'
import Treasures from './treasures'
import Header from './header'


// parent 
const Main = () => {

    const fetchAPI = (url, setList) => {
        fetch(url)
        .then(response => response.json())
        .then(responseText => setList(responseText.data))
    }

    //fetch na sessão 'monsters' da API e converte para JSON
    
    var [monstersList, setmonsterList] = useState([])

    useEffect(() => {
        fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category/monsters', setmonsterList);
    }, [])


    //fetch na sessão 'equipments' da API e converte para JSON
    
    var [equipmentsList, setequipmentList] = useState([])
    
    useEffect(() => {
        fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category/equipment', setequipmentList);
    }, [])

    //fetch na sessão 'materials' da API e converte para JSON

    var [materialsList, setmaterialsList] = useState([])

    useEffect(() => {
        fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category/materials', setmaterialsList);
    }, [])

    //fetch na sessão 'treasures' da API e converte para JSON

    var [treasuresList, settreasuresList] = useState([])

    useEffect(() => {
        fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category/treasure', settreasuresList);
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