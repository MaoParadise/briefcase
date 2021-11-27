import React, {useContext} from 'react';
import './Main-Faq.css';
import GlobalContext from '../../contexts/globalContext';

const MainFaq = () => {

    const { refToScrollFaq } = useContext(GlobalContext);

    return (
        <div ref={refToScrollFaq} className='faq'>
            <article className='where'>
                <h1>¿Que hago aqui?</h1>
                <div className='divisor'></div>
                <p> Bienvenido, <i>¡NO ENTRES EN PANICO!</i>, si haz llegado aqui es por algo y espero no decepcionarte en tu busqueda. </p>
                <p> Mi nombre es <i>Carlos Andrés Pastén Bravo</i>, Analista Programador y Desarrollador Web, esta es mi sitio, el lugar que funge
                    como compendio de todo lo que necesitas saber sobre mi trabajo y mi vida. si lo que vez te agrada y quieres contactarme en
                    la esquina inferior derecha encontraras mis medios de contacto.
                </p>
            </article>


            <article className='what'>
                <h1>¿Que hay aqui?</h1>
                <div className='divisor'></div>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, minus dicta a enim delectus error modi facilis obcaecati id eveniet amet nemo deserunt debitis nisi tempora perferendis. Incidunt, asperiores harum?
                </p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione officia non cum eum exercitationem quisquam dignissimos, recusandae quaerat tenetur impedit libero sequi? At id laborum eaque, eveniet ratione pariatur! Ratione.</p>
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
