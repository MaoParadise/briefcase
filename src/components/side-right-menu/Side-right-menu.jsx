import React, { useContext } from 'react';
import GlobalContext from '../../contexts/globalContext';
import './side-right-menu.css';

const SideRightMenu = () => {
    
    const { toggleMenu} = useContext(GlobalContext);
    
    return (
        
        <section className={`side-right-menu ${toggleMenu ? 'menu-open' : 'menu-close'}`}>
            
            <h1> Hola </h1>
            <p> Me llamo Carlos </p>
            <p>
               [main] &gt; &gt; &gt; :  <br /> 
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, ducimus, magnam et, animi blanditiis itaque velit incidunt dignissimos quo eum suscipit? Asperiores sapiente culpa magni velit quod veniam saepe impedit.
            </p>
            <ul>
                <li>
                <i className="fab fa-facebook"></i>
                </li>
                <li>
                <i className="fab fa-twitter"></i>
                </li>
                <li>
                <i className="fab fa-github"></i>
                </li>
                <li>
                <i className="fas fa-at"></i>
                </li>
            </ul>
        </section>
    );
}

export { SideRightMenu };
