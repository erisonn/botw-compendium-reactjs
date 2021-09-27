import Card from "./Card";
import './CardList.scss'

const CardList = ( { data } ) => {

    return ( 
        <div className="card-list">
            {data && data.map(item => <Card itemIMG ={item.img} itemName={item.name} key={item.id}/>)}
        </div>
    );
}
 
export default CardList;