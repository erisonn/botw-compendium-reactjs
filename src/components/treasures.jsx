import React from 'react';

//Componente Treasures: Responsável por renderizar os dados da entrada 'treasure' da API, recebidos pelo componente Main.
const Treasures = ({treasuresList, searchterm}) => {

    return ( 

        <div className="treasures">
            {treasuresList.filter((val) => {
                if (searchterm === '') {
                    return val
                } else if (val.name.includes(searchterm)) {
                    return val
                }
            }).map(treasure => 
            <div className="treasure-list" key={treasure.id}>
                <h1>{treasure.name.toUpperCase()}</h1>
                <img src={treasure.image} alt={treasure.name} />
                <p>{treasure.description}</p>
                <ul>
                    Common Locations {treasure.common_locations.map( location => <li key={location + treasure.id}>{location}</li>)}
                </ul>
                <ul>
                    Drops {treasure.drops.map(drop => <li key={drop + treasure.id}>{drop.charAt(0).toUpperCase() + drop.slice(1)}</li>)}
                </ul>
            </div>
                )}
        </div>

    );
}
 
export default Treasures;