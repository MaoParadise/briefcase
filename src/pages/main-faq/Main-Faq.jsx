import React from 'react';
import './Main-Faq.css';

const MainFaq = () => {


    return (
        <div  className='faq'>
            <article className='where'>
                <h1>¿Que hago aqui?</h1>
                <div className='divisor'></div>
                <p> Bienvenido, <i>¡NO ENTRES EN PANICO!</i>, si has llegado aquí es por algo y espero no decepcionarte en tu búsqueda. </p>
                <p> Mi nombre es <i>Carlos Andrés Pastén Bravo</i>, Analista Programador y Desarrollador Web. </p>
            </article>


            <article className='what'>
                <h1>¿Que hay aqui?</h1>
                <div className='divisor'></div>
                <p> Este lugar funge
                    como compendio de todo lo que necesitas saber sobre los proyectos que he hecho, mi nivel de conocimiento
                    y mi experiencia en las diversas tecnologías de la industria.
                </p>
                <p>
                    si lo que ves te agrada no dudes en hablarme, mis medios de contacto están en <i> la parte inferior derecha de la página. </i>
                </p>
            </article>

            {/* <article className='what-hope'>
                <div className='divisor'></div>
                <h1> ¿Que espero coseguir? </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa, tempore quas assumenda sunt voluptates deleniti alias et possimus ullam repellendus neque explicabo in beatae repudiandae? Minima, commodi. Adipisci, nesciunt!</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis expedita iusto quibusdam dicta magnam veniam recusandae quos, dignissimos soluta laudantium vel magni aspernatur at suscipit! Necessitatibus sunt ut perferendis maiores?</p>
            </article> */}
        </div>
    );
}

export default MainFaq;
