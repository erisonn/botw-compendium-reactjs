import { useState } from 'react';
import Modal from '../Modal/Modal';
import './Card.scss'

const Card = ({ itemIMG, itemName, itemDescription }) => {

    const [showModal, setShowModal] = useState(false);

    const handleOnHover = () => {
        setShowModal(true)
    }

    const handleMouseOut = () => {
        setShowModal(false)   
    }

    return (
        <>
        <div className="card-item" onMouseOver={handleOnHover} onMouseOut={handleMouseOut}>
            <div className="item-image">
                <img src={itemIMG} alt=""/>
            </div>
            <div className="item-name">
                <h1>{itemName}</h1>
            </div>
            {showModal && <Modal description={itemDescription}/>}
        </div>
        </>
    );
}
 
export default Card;