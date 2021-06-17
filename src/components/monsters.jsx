import React, { useEffect, useState } from 'react';

const Monsters = () => {

  const API_URL = 'https://botw-compendium.herokuapp.com/api/v2/category/monsters'

  function fetchAPI(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
  }

  var [monstersList, setmonsterList] = useState([])

  useEffect(() => {
    var monsters = fetchAPI(API_URL);
    var monsters_data = JSON.parse(monsters);
    monstersList = setmonsterList(monsters_data.data)
  }, [])

  return (  

    <div className='monsters'>
      {monstersList.map(monster => 
        <div className='monster-item'>
          <h1>{monster.name}</h1>
          <img src={monster.image}/>
          <p>{monster.description}</p>
        </div>
      )}
    </div>

  )
}
 
export default Monsters;
