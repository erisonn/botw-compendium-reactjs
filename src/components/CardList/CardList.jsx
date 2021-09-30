import { useEffect } from "react";
import Card from "./Card";
import './CardList.scss'

const CardList = ( { data } ) => {

    useEffect(() => {
        console.log(data)
    }, [data])

    return ( 
        <div className="card-list">
            {data && data.map(item => <Card itemIMG ={item.img} itemName={item.name} itemDescription={item.description} key={item.id}/>)}
        </div>
    );
}
 
export default CardList;