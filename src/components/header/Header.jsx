import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../contexts/globalContext';
import './Header.css';

const Header = () => {

    const { toggleMenu, handleToggleMenu } = useContext(GlobalContext);


    return (
        <nav className={`navbar ${toggleMenu ? 'nav-menu-open' : 'nav-menu-close'}`}>
            <ul>
                <li><span className="material-icons-round" alt='Home'>
                    <Link to='/'> home </Link>
                </span></li>

                <li><span className="material-icons-round">
                    <Link to='/skills'> code </Link>
                </span></li>
                <li><span className="material-icons-round">
                    source
                </span>
                </li>
                <li><span className="material-icons-round">
                    collections
                </span></li>
                <span onClick={() => handleToggleMenu() } className="toggle-menu material-icons-round menu-toggle">
                    menu 
                </span>
            </ul>
        </nav>

    );
}

export { Header };
