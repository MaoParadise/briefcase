import React from 'react';
import './experience.css';
import refugioMolle from '../../assets/Images/refugioMolle.png';
import homeGestion from '../../assets/Images/homegestionInmo.png';
import homeClean from '../../assets/Images/homeClean.png';

const Experience = () => {
    return (
        <div className='experience'>
            <div className="experience-card">
                <div className="experience-image">
                    <img src={ refugioMolle } alt="imagen refugio el molle" />
                </div>
                <div className='experience-title'>
                    <div>Refugio El Molle</div>
                    <button className='go-button'> Ir </button>
                </div>
            </div> 

            <div className="experience-card">
                <div className="experience-image">
                    <img src={ homeGestion } alt="imagen home gestion inmobiliaria" />
                </div>
                <div className='experience-title'>
                    <div>Home Gestion Inmobiliaria</div>
                    <button className='go-button'> Ir </button>
                </div>
            </div> 

            <div className="experience-card">
                <div className="experience-image">
                    <img src={ homeClean } alt="imagen Home clean" />
                </div>
                <div className='experience-title'>
                    <div>Home Clean</div>
                    <button className='go-button'> Ir </button>
                </div>
            </div>
        </div>
        
    );
}

export default Experience;
