import React, { useState, useContext } from 'react';
import './presentation-card.css';
import './cardStyles/desktop.css';
import './cardStyles/smartphone.css';
import GlobalContext from '../../contexts/globalContext';
import defaultImageMovil from '../../assets/Images/blacklist-lol/movil-version1.png';
import defaultImageDesktop from '../../assets/Images/blacklist-lol/desktop-version1.png';



const PresentationCard = (props) => {
    
    const { toggleMenu } = useContext(GlobalContext);
    const [version, setVersion] = useState('desktop');
    const handleVersion = () => {
        if (version === 'desktop') {
            setVersion('smartphone');
        } else {
            setVersion('desktop');
        }
    }
    return (
        <div className={`presentation-card ${toggleMenu ? 'presentation-menu-open' : 'presentation-menu-close'}`}>
            {
                (version === 'smartphone') ?
                <div className="smartphone">

                <div className="camera"></div>
                <div className="camera-back"></div>
                <div className="point-camera"></div>

                <div className="screen">
                    <div className="screen-glass"></div>
                    <img className="image-screen" src={(props.props) ? props.props.imageMovile : defaultImageMovil} alt="" />
                </div>
                <div className="buttons">
                    <i className="fas fa-chevron-left"></i>
                    <i className="far fa-circle"></i>
                    <i className="far fa-square"></i>
                </div>
            </div>
            :  ''              
            }
            
            <div className="desktop-and-drescription">
            {
                (version === 'desktop') ?
                <div class="desktop">
                <div class="desktop-camera">
                </div>
                <div class="screen-desktop">
                    <div class="screen-glass-desktop"></div>
                    <img class="image-screen-desktop" src={(props.props) ? props.props.imageDesktop : defaultImageDesktop} alt="" />
                </div>
                
                </div>
                :  ''
            }
            <div className="description">
                <button className='switchButton' onClick={() => handleVersion()} > switch to movil </button>
                    {(props.props) ?
                         <h4> { props.props.title } </h4>
                        : ''
                    }
                    {(props.props) ?
                         props.props.description
                        : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ab a voluptate repudiandae, pariatur dolores vero, tempore minus tempora temporibus consequuntur molestias laboriosam quibusdam ipsum sed iusto dolorem repellendus. Eligendi.'
                    }

            </div>
            </div>
            


        </div>
    );
}

export default PresentationCard;
