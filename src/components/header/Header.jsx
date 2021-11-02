import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li><span class="material-icons-round">
                    home
                </span></li>

                <li><span class="material-icons-round">
                    code
                </span></li>
                <li><span class="material-icons-round">
                    source
                </span>
                </li>
                <li><span class="material-icons-round">
                    collections
                </span></li>
                <li>
                    <span class="material-icons-round">
                        science
                    </span>
                </li>
                <li>
                    <span class="material-icons-round menu-toggle">
                        menu
                    </span>
                </li>
            </ul>
        </nav>

    );
}

export { Header };
