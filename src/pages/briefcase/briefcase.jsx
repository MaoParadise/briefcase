import React, { useContext } from 'react';
import PresentationCard from '../../components/presentation-card/presentation-card';
import './briefcase.css';
import GlobalContext from '../../contexts/globalContext';


// eslint-disable-next-line no-lone-blocks
{
    /*  
        sitio de noticias
        carrito de compras
        el sitio todos
        el sitio de criptomonedas
        la black list de lol 

    */
}

const Briefcase = () => {

    const { refToScrollBriefcase } = useContext(GlobalContext);

    return (
        <div ref={refToScrollBriefcase} className='briefcase'>
            <h1> Project than could be interesting </h1>
            <div className='briefcase-cards'>
                <PresentationCard />
                
                <PresentationCard />

                <PresentationCard />

                <PresentationCard />

                <PresentationCard />
            </div>    
        </div>
    );
}

export default Briefcase;
