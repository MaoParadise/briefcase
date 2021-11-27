import React, {useContext} from 'react';
import './experience.css';
import refugioMolle from '../../assets/Images/refugioMolle.png';
import homeGestion from '../../assets/Images/homegestionInmo.png';
import homeClean from '../../assets/Images/homeClean.png';
import GlobalContext from '../../contexts/globalContext';

const Experience = () => {

    const { refToScrollExperience } = useContext(GlobalContext);

    return (
        <div ref={refToScrollExperience} className='experience'>
            <h1> Experiencia real </h1>
            <div className="experience-card">
                <div className="experience-image">
                    <img src={ refugioMolle } alt="imagen refugio el molle" />
                </div>
                <div className='experience-title'>
                    <div>Refugio El Molle</div>
                </div>
                <div className="experience-information">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error iusto aperiam inventore iure numquam pariatur delectus sequi dolore odit voluptates enim aut voluptas beatae, molestias ut quas nihil at?
                    </p>
                    <button className='go-button'> Ir </button>
                </div>
            </div> 

            <div className="experience-card">
                <div className="experience-image">
                    <img src={ homeGestion } alt="imagen home gestion inmobiliaria" />
                </div>
                <div className='experience-title'>
                    <div>Home Gestion Inmobiliaria</div>
                </div>
                <div className="experience-information">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error iusto aperiam inventore iure numquam pariatur delectus sequi dolore odit voluptates enim aut voluptas beatae, molestias ut quas nihil at?
                    </p>
                    <button className='go-button'> Ir </button>
                </div>
            </div> 

            <div className="experience-card">
                <div className="experience-image">
                    <img src={ homeClean } alt="imagen Home clean" />
                </div>
                <div className='experience-title'>
                    <div>Home Clean</div>
                </div>
                <div className="experience-information">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error iusto aperiam inventore iure numquam pariatur delectus sequi dolore odit voluptates enim aut voluptas beatae, molestias ut quas nihil at?
                    </p>
                    <button className='go-button'> Ir </button>
                </div>
            </div>
        </div>
        
    );
}

export default Experience;
