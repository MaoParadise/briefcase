import React, { useContext } from 'react';
import GlobalContext from '../../contexts/globalContext';
import './Header.css';

const Header = () => {

    const { toggleMenu, handleToggleMenu } = useContext(GlobalContext);


    return (
        <nav className={`navbar ${toggleMenu ? 'nav-menu-open' : 'nav-menu-close'}`}>
            <ul>
                <li><span className="material-icons-round">
                    home
                </span></li>

                <li><span className="material-icons-round">
                    code
                </span></li>
                <li><span className="material-icons-round">
                    source
                </span>
                </li>
                <li><span className="material-icons-round">
                    collections
                </span></li>
                <li>
                    <span className="material-icons-round">
                        science
                    </span>
                </li>
                <li>
                    <span onClick={() => handleToggleMenu() } className="material-icons-round menu-toggle">
                        menu
                    </span>
                </li>
            </ul>
        </nav>

    );
}

export { Header };
