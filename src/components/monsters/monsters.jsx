import React, { useEffect } from 'react';
import Loading from '../loading'
import MonsterItem from './monsterItem';

//Componente Monsters: Responsável por renderizar os dados da entrada 'monsters' da API, recebidos pelo componente Main.
const Monsters = ({fetchAPI, monstersList, setmonsterList, searchterm}) => {

  useEffect(() => {
    if (monstersList.length === 0) {
      fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category/monsters', setmonsterList);
    }
  }, [fetchAPI, setmonsterList, monstersList])

  return (  
    <div className='monsters'>
      {monstersList.length === 0 ? <Loading/> : monstersList.filter((val) => {
        if (searchterm === '') {
          return val
        } else if (val.name.includes(searchterm)) {
          return val
        }
          return false
      }).map((monster) =>
        <MonsterItem monster={monster} key={monster.id}/>
      )}
    </div>
  )
}
 
export default Monsters;