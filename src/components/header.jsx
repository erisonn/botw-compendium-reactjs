import React from 'react';
import './header.css'

//Componente Header: Responsável por definir qual componente vai ser renderizado pelo componente Main, de acordo com o click do user
const Header = ({content, setContent}) => {
    return ( 
        <>
        <header>
            <nav>
                <button onClick={() => setContent('Creatures')}>CREATURES</button>
                <button onClick={() => setContent('Equipments')}>EQUIPMENTS</button>
                <button onClick={() => setContent('Materials')}>MATERIALS</button>
                <button onClick={() => setContent('Monsters')}>MONSTERS</button>
                <button onClick={() => setContent('Treasures')}>TREASURE</button>
            </nav>
        </header>
        <h1 className="content-title">The Legend of Zelda: Breath of the Wild: {content}</h1>
        </>
    );
}

export default Header;