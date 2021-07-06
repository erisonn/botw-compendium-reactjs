import React, { useState } from 'react';
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

    if (content === 'Monsters') {
        return ( 
            <>
            <Header content={content} setContent={setContent} setsearchTerm={setsearchTerm}/>
            <Monsters fetchAPI={fetchAPI} monstersList={monstersList} setmonsterList={setmonsterList} searchterm={searchterm}/>
            </>
        );
    } 
    if (content === 'Equipments') {
        return (
            <>
            <Header content={content} setContent={setContent} setsearchTerm={setsearchTerm}/>
            {<Equipments fetchAPI={fetchAPI} equipmentsList={equipmentsList} setequipmentList={setequipmentList} searchterm={searchterm}/>}
            </>
        )
    }
    if (content === 'Materials') {
        return (
            <>
            <Header content={content} setContent={setContent} setsearchTerm={setsearchTerm}/>
            {<Materials fetchAPI={fetchAPI} materialsList={materialsList} setmaterialsList={setmaterialsList} searchterm={searchterm}/>}
            </>
        )
    }
    if (content === 'Treasures') {
        return (
            <>
            <Header content={content} setContent={setContent} setsearchTerm={setsearchTerm}/>
            {<Treasures fetchAPI={fetchAPI} treasuresList={treasuresList} settreasuresList={settreasuresList} searchterm={searchterm}/>}
            </>
        )
    }
    if (content === 'Creatures') {
        return (
            <>
            <Header content={content} setContent={setContent} setsearchTerm={setsearchTerm}/>
            {<Creatures fetchAPI={fetchAPI} creaturesList={creaturesList} setcreaturesList={setcreaturesList} searchterm={searchterm}/>}
            </>
        )
    }
}
 
export default Main;