import React from 'react';

//Componente Materials: Responsável por renderizar os dados da entrada 'materials' da API, recebidos pelo componente Main.
const Materials = ({materialsList, searchterm}) => {

  return (  

    <div className='materials'>
      {materialsList.filter((val) => {
        if (searchterm === '') {
          return val
        } else if (val.name.includes(searchterm)) {
          return val
        }
          return false
      }).map(material => 
        <div className='material-item' key={material.id}>
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
      )}
    </div>

  )
}
 
export default Materials;