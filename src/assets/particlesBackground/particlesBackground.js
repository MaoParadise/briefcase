import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from '../../config/particle-config';
import './particlesBackground.css';

const Particlesbackground = () => {
    return (
        <Particles params={particlesConfig} />
    );
}

export default Particlesbackground;
