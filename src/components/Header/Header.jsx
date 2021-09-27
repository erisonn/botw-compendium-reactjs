import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss'

//Componente Header: Responsável por definir qual componente vai ser renderizado pelo componente Main, de acordo com o click do user
const Header = () => {
    return ( 
        <header>
            <nav>
                <NavLink to='/creatures'>CREATURES</NavLink>
                <NavLink to='/equipment'>EQUIPMENTS</NavLink>
                <NavLink to='/materials'>MATERIALS</NavLink>
                <NavLink to='/monsters'>MONSTERS</NavLink>
                <NavLink to='/treasure'>TREASURE</NavLink>
            </nav>
        </header>
    )
}

export default Header;