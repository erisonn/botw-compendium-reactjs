import React, { useEffect } from 'react';
import Loading from '../loading';
import TreasureItem  from './treasureItem';

//Componente Treasures: Responsável por renderizar os dados da entrada 'treasure' da API, recebidos pelo componente Main.
const Treasures = ({fetchAPI, treasuresList, settreasuresList, searchterm}) => {

    useEffect(() => {
        if (treasuresList.length === 0) {
            fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category/treasure', settreasuresList);
        }
    }, [])

    return ( 
        <div className="treasures">
            {treasuresList.length === 0 ? <Loading/> : treasuresList.filter((val) => {
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