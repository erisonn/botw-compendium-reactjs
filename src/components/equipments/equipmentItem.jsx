import React from 'react';

const EquipmentItem = ({equipment}) => {
    return ( 
        <div className='equipment-item'>
          <h1>{equipment.name.toUpperCase()}</h1>
          <img src={equipment.image} alt={equipment.name.toUpperCase()}/>
          <p>{equipment.description}</p>
          <ul>
            <li>Attack: {equipment.attack}</li>
            <li>Defense: {equipment.defense}</li>
          </ul>
        </div>
    );
}
 
export default EquipmentItem;