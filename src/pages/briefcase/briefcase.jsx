import React, { useContext } from 'react';
import PresentationCard from '../../components/presentation-card/presentation-card';
import './briefcase.css';
import GlobalContext from '../../contexts/globalContext';
import blackListMobile from '../../assets/Images/blacklist-lol/movil-version1.png';
import blackListDesktop from '../../assets/Images/blacklist-lol/desktop-version1.png';
import toDoMobile from '../../assets/Images/todos/movil-version1.png';
import toDoDesktop from '../../assets/Images/todos/desktop-version1.png';
import rickAndMortyMobile from '../../assets/Images/RickAndMorty/movil-version1.png';
import rickAndMortyDesktop from '../../assets/Images/RickAndMorty/desktop-version1.png';
import newMobile from '../../assets/Images/news/movil-version1.png';
import newDesktop from '../../assets/Images/news/desktop-version1.png';
import shooppingDesktop from '../../assets/Images/shoppingCart/desktop-version1.png';
import shooppingMobile from '../../assets/Images/shoppingCart/movil-version1.png';




const Briefcase = () => {

    const { refToScrollBriefcase } = useContext(GlobalContext);
    const angular = 'fab fa-angular';
    const react = 'fab fa-react';
    const node = 'fab fa-node-js';
    const javascript = 'fab fa-js';
    const bootstrap = 'fab fa-bootstrap'; 

    return (
        <div ref={refToScrollBriefcase} className='briefcase'>
            <h1> Projectos que podrian ser interesantes </h1>
            <div className='briefcase-cards'>
                <PresentationCard
                    props={
                        {
                            title: 'My personal BlackList of LOL', 
                            description: 'Usando la API de RIOT GAME generé una lista con la gente del servidor de Latinoamérica Sur que no desearía encontrarme, incluyendo un nivel de toxicidad',
                            imageDesktop: blackListDesktop,
                            imageMovile: blackListMobile,
                            tecnologies: [react, javascript, node],
                            urls: {
                                repository : 'https://github.com/MaoParadise/my-BlackList',
                                site : 'https://maochroniclesblacklist.netlify.app/'
                            }
                        }
                    }
                />
                
                <PresentationCard
                    props={
                        {
                            title: 'Twenty Rick and Morty Characters', 
                            description: 'Una SPA que muestra los personajes de Rick y Morty, con sus respectivos datos, en una lista de 20 personajes',
                            imageDesktop: rickAndMortyDesktop,
                            imageMovile: rickAndMortyMobile,
                            tecnologies: [react, javascript],
                            urls: {
                                repository : 'https://github.com/MaoParadise/RickAndMortyCharacters',
                                site : 'https://twentyrickandmortyscharacter.netlify.app/'
                            }
                        }
                    }
                />

                <PresentationCard
                   props={
                    {
                        title: 'Proyecto NeoLoot', 
                        description: 'Un proyecto personal de un sitio noticias de tecnología y videojuegos, que consiste en el frontend, backend y una base de datos hecha en mysql, jamás llegue a lanzarla por temas personales pero siempre me he sentido orgulloso de lo aprendido y el resultado final',
                        imageDesktop: newDesktop,
                        imageMovile: newMobile,
                        tecnologies: [angular, node, bootstrap],
                        urls: {
                            repository : 'https://github.com/MaoParadise/new-site-frontend',
                            site : 'https://neo-loot-prototype2.netlify.app/'
                        }
                    }
                } 
                />

                <PresentationCard
                    props={
                        {
                            title: "TO DO's", 
                            description: 'Una sencilla SPA para guardar las cosas que quedan por hacer, es un proyecto de una clase de platzi para ahondar en los fundamentos de React',
                            imageDesktop: toDoDesktop,
                            imageMovile: toDoMobile,
                            tecnologies: [react],
                            urls: {
                                repository : 'https://github.com/MaoParadise/toDoInReact',
                                site : 'https://festive-curie-94e359.netlify.app'
                            }
                        }
                    }       
                />

                <PresentationCard
                    props={
                        {
                            title: "Shooping Cart", 
                            description: 'Un ejemplo de tienda en línea con carrito de compra de un proceso de selección antiguo que adapte para propósitos generales',
                            imageDesktop: shooppingDesktop,
                            imageMovile: shooppingMobile,
                            tecnologies: [javascript, node],
                            urls: {
                                repository : 'https://github.com/MaoParadise/onlineShoppingB',
                                site : 'https://romantic-heisenberg-14b73f.netlify.app/'
                            }
                        }
                    }       
                />

            </div>    
        </div>
    );
}

export default Briefcase;
