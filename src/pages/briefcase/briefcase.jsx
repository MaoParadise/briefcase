import React, { useContext } from 'react';
import PresentationCard from '../../components/presentation-card/presentation-card';
import './briefcase.css';
import GlobalContext from '../../contexts/globalContext';
import blackListMovile from '../../assets/Images/blacklist-lol/movil-version1.png';
import blackListDesktop from '../../assets/Images/blacklist-lol/desktop-version1.png';
import toDoMovile from '../../assets/Images/todos/movil-version1.png';
import toDoDesktop from '../../assets/Images/todos/desktop-version1.png';
import rickAndMortyMovile from '../../assets/Images/RickAndMorty/movil-version1.png';
import rickAndMortyDesktop from '../../assets/Images/RickAndMorty/desktop-version1.png';


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
            <h1> Projectos que podrian ser interesantes </h1>
            <div className='briefcase-cards'>
                <PresentationCard
                    props={
                        {
                            title: 'My personal BlackList of LOL', 
                            description: 'Usando la API de RIOT GAME genere una lista con la gente del servidor de LatinoAmerica Sur que no desearia encontrarme, incluyendo un nivel de toxicidad',
                            imageDesktop: blackListDesktop,
                            imageMovile: blackListMovile,
                        }
                    }
                />
                
                <PresentationCard
                    props={
                        {
                            title: 'My personal BlackList of LOL', 
                            description: 'Usando la API de RIOT GAME genere una lista con la gente del servidor de LatinoAmerica Sur que no desearia encontrarme, incluyendo un nivel de toxicidad',
                            imageDesktop: toDoDesktop,
                            imageMovile: toDoMovile,
                        }
                    }
                />

                <PresentationCard
                    props={
                        {
                            title: 'My personal BlackList of LOL', 
                            description: 'Usando la API de RIOT GAME genere una lista con la gente del servidor de LatinoAmerica Sur que no desearia encontrarme, incluyendo un nivel de toxicidad',
                            imageDesktop: rickAndMortyDesktop,
                            imageMovile: rickAndMortyMovile,
                        }
                    }       
                />

                <PresentationCard />

                <PresentationCard />
            </div>    
        </div>
    );
}

export default Briefcase;
