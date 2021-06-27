import React from 'react';

const MaterialItem = ({material}) => {
    return ( 
        <div className='material-item'>
          <h1>{material.name.toUpperCase()}</h1>
          <img src={material.image} alt={material.name}/>
          <p>{material.description}</p>
          <ul>
              <li>Cooking Effect: {material.cooking_effect}</li>
              <li>Hearts Recovered: {material.hearts_recovered}</li>
              <ul>
                Common Locations {material.common_locations.map(location => <li key={location + material.id}>{location}</li>)}
              </ul>
          </ul>
        </div>
    );
}
 
export default MaterialItem;