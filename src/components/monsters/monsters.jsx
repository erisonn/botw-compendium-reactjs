import React from 'react';
import MonsterItem from './monsterItem';

//Componente Monsters: Responsável por renderizar os dados da entrada 'monsters' da API, recebidos pelo componente Main.
const Monsters = ({monstersList, searchterm}) => {

  return (  
    <div className='monsters'>
      {monstersList.filter((val) => {
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
