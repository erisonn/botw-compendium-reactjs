import React from 'react';
import './header.css'

// children
const Header = ({setContent}) => {
    return ( 
        <header>
            <nav>
                <a href="#">CREATURES</a>
                <a href="#" onClick={() => setContent('Equipments')}>EQUIPMENTS</a>
                <a href="#" onClick={() => setContent('Materials')}>MATERIALS</a>
                <a href="#" onClick={() => setContent('Monsters')}>MONSTERS</a>
                <a href="#">TREASURE</a>
            </nav>
        </header>
    );
}

export default Header;