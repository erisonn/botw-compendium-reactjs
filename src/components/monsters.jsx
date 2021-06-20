import React from 'react';

const Monsters = ({monstersList}) => {

  return (  

    <div className='monsters'>
      {monstersList.map(monster => 
        <div className='monster-item' key={monster.id}>
          <h1>{monster.name.toUpperCase()}</h1>
          <img src={monster.image} alt={monster.name}/>
          <p>{monster.description}</p>
        </div>
      )}
    </div>

  )
}
 
export default Monsters;
