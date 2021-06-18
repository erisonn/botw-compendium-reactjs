import React from 'react';

const Equipments = ({equipmentsList}) => {

  return (  

    <div className='equipments'>
      {equipmentsList.map(equipment => 
        <div className='equipment-item' key={equipment.id}>
          <h1>{equipment.name.toUpperCase()}</h1>
          <img src={equipment.image}/>
          <p>{equipment.description}</p>
          <ul>
            <li>Attack: {equipment.attack}</li>
            <li>Defense: {equipment.defense}</li>
          </ul>
        </div>
      )}
    </div>

  )
}
 
export default Equipments;