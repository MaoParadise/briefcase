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
                    Hotel Boutique refugió el molle es un hotel ubicado al interior del Valle del Elqui, su principal foco es el turismo, convenciones y eventos. 
                    </p>
                    <button className='go-button'> <i class="fas fa-link"></i> </button>
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
                    Home Gestion Inmobiliaria es una empresa de gestión inmobiliaria que se dedica a la venta y alquiler de viviendas de manera local dentro de la cuarta región de Chile.                    </p>
                    <button className='go-button'> <i class="fas fa-link"></i> </button>
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
                        Home Clean es un servicio de limpieza a domicilio de alfombras y muebles de casa.
                    </p>
                    <button className='go-button'> <i class="fas fa-link"></i> </button>
                </div>
            </div>
        </div>
        
    );
}

export default Experience;
