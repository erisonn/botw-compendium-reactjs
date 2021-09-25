import { NavLink } from "react-router-dom"
import './Card.scss'

const Card = ({ itemIMG, itemName, itemLink }) => {

    return (
        <NavLink to={itemLink} className='card-link'>
        <div className="card-item">
            <div className="item-image">
                <img src={itemIMG} alt=""/>
            </div>
            <div className="item-name">
                <h1>{itemName}</h1>
            </div>
        </div>
        </NavLink>
    );
}
 
export default Card;