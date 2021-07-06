import React, { useEffect } from 'react';
import Loading from '../loading'
import EquipmentItem from './equipmentItem';
//Componente Equipments: Responsável por renderizar os dados da entrada 'equipment' da API, recebidos pelo componente Main.
const Equipments = ({fetchAPI, equipmentsList, setequipmentList, searchterm}) => {

  useEffect(() => {
    if (equipmentsList.length === 0) {
      fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category/equipment', setequipmentList);
    }
  }, [fetchAPI, equipmentsList, setequipmentList])

  return (
    <div className='equipments'>
      {equipmentsList.length === 0 ? <Loading/> : equipmentsList.filter((val) => {
        if (searchterm === '') {
          return val
        } else if(val.name.includes(searchterm)) {
          return val
        }
          return false
      }).map(equipment => 
        <EquipmentItem equipment={equipment} key={equipment.id}/>
      )}
    </div>
  )
}
 
export default Equipments;