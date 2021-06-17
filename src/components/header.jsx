import React from 'react';
import './header.css'

// children
const Header = ({ShowEquipment, ShowMonsters}) => {
    return ( 
        <header>
            <nav>
                <a href="#" onClick={() => ShowMonsters()}>MONSTERS</a>
                <a href="#" onClick={() => ShowEquipment()}>EQUIPMENTS</a>
                <a href="#">CREATURES</a>
                <a href="#">INGREDIENTS</a>
            </nav>
        </header>
    );
}

export default Header;