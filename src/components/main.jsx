import React, { useState, useEffect } from 'react';
import Monsters from './monsters'
import Equipments from './equipments'
import Materials from './materials'
import Treasures from './treasures'
import Creatures from './creatures'
import Header from './header'


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

    //fetch na entrada 'monsters' da API
    
    var [monstersList, setmonsterList] = useState([])

    useEffect(() => {
        fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category/monsters', setmonsterList);
    }, [])


    //fetch na entrada'equipments' da API e converte para JSON
    
    var [equipmentsList, setequipmentList] = useState([])
    
    useEffect(() => {
        fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category/equipment', setequipmentList);
    }, [])

    //fetch na entrada 'materials' da API e converte para JSON

    var [materialsList, setmaterialsList] = useState([])

    useEffect(() => {
        fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category/materials', setmaterialsList);
    }, [])

    //fetch na entrada 'treasures' da API e converte para JSON

    var [treasuresList, settreasuresList] = useState([])

    useEffect(() => {
        fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category/treasure', settreasuresList);
    }, [])

    //fetch na entrada 'creatures' da API e converte para JSON

    var [creaturesList, setcreaturesList] = useState([]);

    useEffect(() => {
        fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category/creatures', setcreaturesList);
    }, [])

    const [content, setContent] = useState('Monsters');
    const [searchterm, setsearchTerm] = useState('')

    if (content === 'Monsters') {
        return ( 
            <>
            <Header content={content} setContent={setContent} setsearchTerm={setsearchTerm}/>
            <Monsters monstersList={monstersList} searchterm={searchterm}/>             {/*passa o objeto da API como parametro para o componente child*/}
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