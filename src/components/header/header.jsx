import React from 'react';
import './header.css'

//Componente Header: Responsável por definir qual componente vai ser renderizado pelo componente Main, de acordo com o click do user
const Header = ({content, setContent, setsearchTerm}) => {
    return ( 
        <>
        <header>
            <nav>
                <button className={content === "Creatures" ? 'active' : ''} onClick={() => setContent('Creatures')}>CREATURES</button>
                <button className={content === "Equipments" ? 'active' : ''} onClick={() => setContent('Equipments')}>EQUIPMENTS</button>
                <button className={content === "Materials" ? 'active' : ''} onClick={() => setContent('Materials')}>MATERIALS</button>
                <button className={content === "Monsters" ? 'active' : ''} onClick={() => setContent('Monsters')}>MONSTERS</button>
                <button className={content=== "Treasures" ? 'active' : ''} onClick={() => setContent('Treasures')}>TREASURE</button>
            </nav>
        </header>
        <h1 className="content-title">The Legend of Zelda: Breath of the Wild: {content}</h1>
        <form>
            <input type="text" placeholder={'Search '+content+'...'} className="search-bar" onChange={(event) => setsearchTerm(event.target.value.toLowerCase())}/>
        </form>
        </>
    );
}

export default Header;