import React, { useContext } from 'react';
import './Main-Skills.css';
import './AnimationsSkills.css';
import GlobalContext from '../../contexts/globalContext';

const MainSkills = () => {

    const { refToScrollSkills } = useContext(GlobalContext);

    return (
        <div ref={refToScrollSkills} id='skills' className='skills'>
            <h1> Mis habilidades </h1>
            <div className="skill-information">
                <div className='skill-container'>
                    <span class="fab fa-react skill-logo"></span>
                </div>
                <div className="grafic-bar">
                    <div className="percen"> 75% </div>
                    <div style={{width: '75%'}} className="bar bar-react">
                    </div>
                </div>
            </div>

            <div className="skill-information">
                <div className='skill-container'>
                    <span class="fab fa-angular skill-logo"></span>
                </div>

                <div className="grafic-bar">
                    <div className="percen"> 65% </div>
                    <div style={{width: '65%'}} className="bar bar-angular">
                    </div>
                </div>
            </div>

            <div className="skill-information">
                <div className='skill-container'>
                    <span class="fab fa-node-js skill-logo"></span>
                </div>

                <div className="grafic-bar">
                    <div className="percen"> 55% </div>
                    <div style={{width: '55%'}} className="bar bar-nodejs">
                    </div>
                </div>
            </div>

            <div className="skill-information">
                <div className='skill-container'>
                    <span class="fab fa-html5 skill-logo"></span>
                </div>

                <div className="grafic-bar">
                    <div className="percen"> 90% </div>
                    <div style={{width: '90%'}} className="bar bar-html">
                    </div>
                </div>
            </div>

            <div className="skill-information">
                <div className='skill-container'>
                    <span class="fab fa-css3-alt skill-logo"></span>
                </div>

                <div className="grafic-bar">
                    <div className="percen"> 85% </div>
                    <div style={{width: '85%'}} className="bar bar-css">
                    </div>
                </div>
            </div>

            <div className="skill-information">
                <div className='skill-container'>
                    <span class="fab fa-bootstrap skill-logo"></span>
                </div>

                <div className="grafic-bar">
                    <div className="percen"> 75% </div>
                    <div style={{width: '75%'}} className="bar bar-bootstrap">
                    </div>
                </div>
            </div>

            <div className="skill-information">
                <div className='skill-container'>
                    <span class="fab fa-php skill-logo"></span>
                </div>

                <div className="grafic-bar">
                    <div className="percen"> 70% </div>
                    <div style={{width: '70%'}} className="bar bar-php">
                    </div>
                </div>
            </div>
            <div className="clarification">
                <p> En la presente sección intento de alguna manera cuantificar mis experticias
                    en las diversas tecnología con las que eh trabajo o aspiro hacerlo, siempre
                    entendiendo que en una industria tan dinamica como la tecnológica jamás llegamos a conocer 100% de
                    la mayoría de los temas en constante evolucion. En tal sentido lo mejor que podemos hacer es tratar de acercarnos
                    al grado de perfección que nos permita desempeñar eficientemente nuestro trabajo. </p>
            </div>

        </div>
    );
}

export default MainSkills;
