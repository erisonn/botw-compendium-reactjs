import React from 'react';
import TreasureItem  from './treasureItem';

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
                    return false
            }).map(treasure => 
                <TreasureItem treasure={treasure} key={treasure.id}/>
            )}
        </div>
    );
}
 
export default Treasures;