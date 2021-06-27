import React from 'react';

const TreasureItem = ({treasure}) => {
    return ( 
        <div className="treasure-list">
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
    );
}
 
export default TreasureItem;