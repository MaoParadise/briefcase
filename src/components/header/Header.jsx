import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../contexts/globalContext';
import './Header.css';

const Header = () => {

    const { toggleMenu, handleToggleMenu } = useContext(GlobalContext);


    return (
        <nav className={`navbar ${toggleMenu ? 'nav-menu-open' : 'nav-menu-close'}`}>
            <ul>
                <li>
                    <Link to='/' alt='Home'>
                        <p className="material-icons-round" > home </p>
                        Home
                    </Link> 
                </li>

                <li>
                    <Link to='/skills' alt='skills'>
                        <p className="material-icons-round" > code </p>
                        Habilidades
                    </Link> 
                </li>
                <li>
                    <Link to='/briefcase' alt='portafolio'>
                        <p className="material-icons-round" > source </p>
                        Portafolio
                    </Link> 
                </li>
                <li>
                    <Link to='/experience' alt='Home'>
                        <p className="material-icons-round" > collections </p>
                        Experiencia
                    </Link> 
                </li>
                <span onClick={() => handleToggleMenu()} className="toggle-menu material-icons-round menu-toggle">
                    menu
                </span>
            </ul>
        </nav>

    );
}

export { Header };
