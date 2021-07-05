import React, { useState, useEffect } from 'react';
import Loading from '../svg/loading.svg'
import Monsters from './monsters/monsters'
import Equipments from './equipments/equipments'
import Materials from './materials/materials'
import Treasures from './treasures/treasures'
import Creatures from './creatures/creatures'
import Header from './header/header'


/*
Componente Main
    -Responsável por solicitar os dados da API
    -Passar os dados para JSON
    -Criar os states contento os dados
    -Passar os dados para cada componente como parâmetros
*/
const Main = () => {
    // A função fetchAPI recebe como parâmetro a url de cada entrada da API. 'SetList' é responsável por definir o state quando a função é chamada.
    const fetchAPI = (url, setList) => {
        fetch(url)
        .then(response => response.json())
        .then(responseText => setList(responseText.data))  
    }
    // State onde os dados da API serão armazenados
    const [monstersList, setmonsterList] = useState([]);
    const [equipmentsList, setequipmentList] = useState([]);
    const [materialsList, setmaterialsList] = useState([]);
    const [treasuresList, settreasuresList] = useState([]);
    const [creaturesList, setcreaturesList] = useState([]);

    const [content, setContent] = useState('Monsters');// Define qual componente será renderizado
    const [searchterm, setsearchTerm] = useState('');// Termo de busca

    useEffect(() => {
        fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category/monsters', setmonsterList);
        fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category/equipment', setequipmentList);
        fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category/materials', setmaterialsList);
        fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category/treasure', settreasuresList);
        fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category/creatures', setcreaturesList);
    }, [])

    if (content === 'Monsters') {
        return ( 
            <>
            <Header content={content} setContent={setContent} setsearchTerm={setsearchTerm}/>
            {monstersList.length === 0 ? <div className="loading"><img src={Loading} alt="Loading..."/></div> : <Monsters monstersList={monstersList} searchterm={searchterm}/>}
            </>
        );
    } 
    if (content === 'Equipments') {
        return (
            <>
            <Header content={content} setContent={setContent} setsearchTerm={setsearchTerm}/>
            <Equipments equipmentsList={equipmentsList} searchterm={searchterm}/>
            </>
        )
    }
    if (content === 'Materials') {
        return (
            <>
            <Header content={content} setContent={setContent} setsearchTerm={setsearchTerm}/>
            <Materials materialsList={materialsList} searchterm={searchterm}/>
            </>
        )
    }
    if (content === 'Treasures') {
        return (
            <>
            <Header content={content} setContent={setContent} setsearchTerm={setsearchTerm}/>
            <Treasures treasuresList={treasuresList} searchterm={searchterm}/>
            </>
        )
    }
    if (content === 'Creatures') {
        return (
            <>
            <Header content={content} setContent={setContent} setsearchTerm={setsearchTerm}/>
            <Creatures creaturesList={creaturesList} searchterm={searchterm}/>
            </>
        )
    }
}
 
export default Main;