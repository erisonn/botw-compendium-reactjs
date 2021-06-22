import React from 'react';
import './header.css'

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