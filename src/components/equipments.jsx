import React, { useEffect, useState } from 'react';

const Equipments = () => {

  const API_URL = 'https://botw-compendium.herokuapp.com/api/v2/category/equipment'

  function fetchAPI(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
  }

  var [equipmentsList, setequipmentList] = useState([])

  useEffect(() => {
    var equipments = fetchAPI(API_URL);
    var equipments_data = JSON.parse(equipments);
    equipmentsList = setequipmentList(equipments_data.data)
  }, [])

  return (  

    <div className='equipments'>
      {equipmentsList.map(equipment => 
        <div className='equipment-item'>
          <h1>{equipment.name}</h1>
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