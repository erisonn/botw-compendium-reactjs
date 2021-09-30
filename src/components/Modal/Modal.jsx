import './Modal.scss'

const Modal = ({ description }) => {

    return ( 
        <div className="modal">
            <p>{description}</p>
        </div>
    );
}
 
export default Modal;