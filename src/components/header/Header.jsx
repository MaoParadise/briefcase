import React, { useContext } from 'react';
import GlobalContext from '../../contexts/globalContext';
import './Header.css';

const Header = () => {

    const { toggleMenu, handleToggleMenu, executeScroll } = useContext(GlobalContext);


    return (
        <nav className={`navbar ${toggleMenu ? 'nav-menu-open' : 'nav-menu-close'}`}>
            <ul>
                <li>
                    <span onClick={() => executeScroll('faq')} alt='Home'>
                        <p className="material-icons-round" > home </p>
                        Home
                    </span> 
                </li>

                <li>
                    <span onClick={() => executeScroll('skills')} alt='skills'>
                        <p className="material-icons-round" > code </p>
                        Habilidades
                    </span> 
                </li>
                <li>
                    <span onClick={() => executeScroll('briefcase')} alt='portafolio'>
                        <p className="material-icons-round" > source </p>
                        Portafolio
                    </span> 
                </li>
                <li>
                    <span onClick={() => executeScroll('experience')} alt='Experiences'>
                        <p className="material-icons-round" > collections </p>
                        Experiencia
                    </span> 
                </li>
                <span onClick={() => handleToggleMenu()} className="toggle-menu material-icons-round menu-toggle">
                    menu
                </span>
            </ul>
        </nav>

    );
}

export { Header };
