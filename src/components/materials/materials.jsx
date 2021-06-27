import React from 'react';
import MaterialItem from './materialItem';

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
        <MaterialItem material ={material} key={material.id}/>
      )}
    </div>

  )
}
 
export default Materials;