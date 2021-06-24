import React from 'react';

const Monsters = ({monstersList}) => {
  return (  

    <div className='monsters'>
      {monstersList.map(monster => 
        <div className='monster-item' key={monster.id}>
          <h1>{monster.name.toUpperCase()}</h1>
          <img src={monster.image} alt={monster.name}/>
          <p>{monster.description}</p>
          <ul>
            Common Locations {monster.common_locations === null || monster.common_locations.length === 0 ? 
            <li>Hyrule</li> : monster.common_locations.map(location => <li key={location + monster.id}>{location}</li>)}
            <ul>
              Drops {monster.drops == null || monster.drops.length === 0 ? 
              <li>None</li> : monster.drops.map(drop => <li key={drop + monster.id}>{drop.charAt(0).toUpperCase() + drop.slice(1)}</li>)}
            </ul>
          </ul>
        </div>
      )}
    </div>

  )
}
 
export default Monsters;
