import React from 'react';
import './side-right-menu.css';

const SideRightMenu = () => {
    return (
        <section className='side-right-menu'>
            <h1> Hola </h1>
            <p> Me llamo Carlos </p>
            <p>
               [main] &gt; &gt; &gt; :  <br /> 
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, ducimus, magnam et, animi blanditiis itaque velit incidunt dignissimos quo eum suscipit? Asperiores sapiente culpa magni velit quod veniam saepe impedit.
            </p>
            <ul>
                <li>
                <i class="fab fa-facebook"></i>
                </li>
                <li>
                <i class="fab fa-twitter"></i>
                </li>
                <li>
                <i class="fab fa-github"></i>
                </li>
                <li>
                <i class="fas fa-at"></i>
                </li>
            </ul>
        </section>
    );
}

export { SideRightMenu };
