import React from 'react';
import EquipmentItem from './equipmentItem';
//Componente Equipments: Responsável por renderizar os dados da entrada 'equipment' da API, recebidos pelo componente Main.
const Equipments = ({equipmentsList, searchterm}) => {

  return (
    <div className='equipments'>
      {equipmentsList.filter((val) => {
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