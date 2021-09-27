import './Card.scss'

const Card = ({ itemIMG, itemName }) => {

    return (
        <div className="card-item">
            <div className="item-image">
                <img src={itemIMG} alt=""/>
            </div>
            <div className="item-name">
                <h1>{itemName}</h1>
            </div>
        </div>
    );
}
 
export default Card;