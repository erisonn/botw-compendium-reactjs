import React from 'react';
import './header.css'

// children
const Header = ({ShowEquipment, ShowMonsters}) => {
    return ( 
        <header>
            <nav>
                <a href="#" onClick={() => ShowMonsters()}>Monsters</a>
                <a href="#" onClick={() => ShowEquipment()}>Equipments</a>
            </nav>
        </header>
    );
}

export default Header;