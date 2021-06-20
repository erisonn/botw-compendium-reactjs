import React from 'react';
import './header.css'

const Header = ({content, setContent}) => {
    return ( 
        <>
        <header>
            <nav>
                <a href="/#">CREATURES</a>
                <a href="/#" onClick={() => setContent('Equipments')}>EQUIPMENTS</a>
                <a href="/#" onClick={() => setContent('Materials')}>MATERIALS</a>
                <a href="/#" onClick={() => setContent('Monsters')}>MONSTERS</a>
                <a href="/#" onClick={() => setContent('Treasures')}>TREASURE</a>
            </nav>
        </header>
        <h1 className="content-title">The Legend of Zelda: Breath of the Wild: {content}</h1>
        </>
    );
}

export default Header;