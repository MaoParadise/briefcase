import React, { useContext } from 'react';
import GlobalContext from '../../contexts/globalContext';
import useTyped from '../../hooks/useTyped';
import logo from '../../assets/perfil.jpg';

import './side-right-menu.css';

const SideRightMenu = () => {
    
    const { toggleMenu, handleToggleMenu } = useContext(GlobalContext);
    const { el,typed } = useTyped();
    
    return (
        <React.Fragment>
        <div onClick={() => handleToggleMenu() } className={`${toggleMenu ? 'back-side' : ''}`}></div>
        
        <section className={`side-right-menu ${toggleMenu ? 'menu-open' : 'menu-close'}`}>
            <h1> Bienvenido </h1>
            <img class='logo' src={logo} alt="" />
            <p>
                <p className='consoleRoot'>Root::[main] &gt; &gt; &gt; : </p>
                <b ref={el}>
                    { () => typed.current.start()}
                </b>
            </p>
            <ul>
                <li>
                <a href='https://twitter.com/MaoParadise' rel="noopener noreferrer" target='_blank' >
                    <i className='fab fa-twitter'></i>
                </a>
                </li>
                <li>
                    <a href="https://github.com/MaoParadise" rel="noopener noreferrer" target='_blank'>
                        <i className="fab fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="mailto:carlos92.pastenbravo@gmail.com" rel="noopener noreferrer" target='_blank'>
                        <i className="fas fa-at"></i>
                    </a>
                </li>
            </ul>
            </section>
        </React.Fragment>
        
    );
}

export { SideRightMenu };
