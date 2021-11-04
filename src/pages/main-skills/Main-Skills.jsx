import React from 'react';
import './Main-Skills.css'

const MainSkills = () => {
    return (
        <div className='skills'>
            <div className="clarification">
                <p> En la presente seccion intento de alguna manera cuantificar mis experticia
                    en las diversas tecnolgia con las que eh trabajo o aspiro hacerlo, siempre
                    entendiendo que en la industria tecnologica jamas llegamos a conocer 100% de
                    la mayoria de los temas. en tal sentido lo mejor que podemos hacer es tratar de acercanos
                    al grado de perfeccion que nos permita desempeñar eficientemente nuestro trabajo </p>
            </div>
            <div className="skill-information">
                <div className='skill-container'>
                    <span class="fab fa-react skill-logo"></span>
                </div>
                <div className="grafic-bar">
                    <div className="percen"> 65% </div>
                    <div style={{width: '65%'}} className="bar">
                    </div>
                </div>
            </div>

            <div className="skill-information">
                <div className='skill-container'>
                    <span class="fab fa-angular skill-logo"></span>
                </div>

                <div className="grafic-bar">
                    <div className="percen"> 55% </div>
                    <div style={{width: '55%'}} className="bar">
                    </div>
                </div>
            </div>

            <div className="skill-information">
                <div className='skill-container'>
                    <span class="fab fa-node-js skill-logo"></span>
                </div>

                <div className="grafic-bar">
                    <div className="percen percen-black"> 40% </div>
                    <div style={{width: '40%'}} className="bar">
                    </div>
                </div>
            </div>

            <div className="skill-information">
                <div className='skill-container'>
                    <span class="fab fa-html5 skill-logo"></span>
                </div>

                <div className="grafic-bar">
                    <div className="percen"> 90% </div>
                    <div style={{width: '90%'}} className="bar">
                    </div>
                </div>
            </div>

            <div className="skill-information">
                <div className='skill-container'>
                    <span class="fab fa-css3-alt skill-logo"></span>
                </div>

                <div className="grafic-bar">
                    <div className="percen"> 85% </div>
                    <div style={{width: '85%'}} className="bar">
                    </div>
                </div>
            </div>

            <div className="skill-information">
                <div className='skill-container'>
                    <span class="fab fa-bootstrap skill-logo"></span>
                </div>

                <div className="grafic-bar">
                    <div className="percen"> 65% </div>
                    <div style={{width: '65%'}} className="bar">
                    </div>
                </div>
            </div>

            <div className="skill-information">
                <div className='skill-container'>
                    <span class="fab fa-php skill-logo"></span>
                </div>

                <div className="grafic-bar">
                    <div className="percen"> 70% </div>
                    <div style={{width: '70%'}} className="bar">
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MainSkills;
