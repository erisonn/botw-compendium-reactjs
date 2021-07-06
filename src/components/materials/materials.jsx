import React, { useEffect } from 'react';
import Loading from '../loading'
import MaterialItem from './materialItem';

//Componente Materials: Responsável por renderizar os dados da entrada 'materials' da API, recebidos pelo componente Main.
const Materials = ({fetchAPI, materialsList, setmaterialsList, searchterm}) => {

  useEffect(() => {
    if (materialsList.length === 0) {
      fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category/materials', setmaterialsList);
    }
  }, [])

  return (  

    <div className='materials'>
      {materialsList.length === 0 ? <Loading/> : materialsList.filter((val) => {
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