//@ts-nocheck
import Particles from 'react-tsparticles';
import { loadLinksPreset } from 'tsparticles-preset-links';
import React from 'react';

const ParticlesBackground = () => {
    const customInit = (main: any) => {
        loadLinksPreset(main);
    };

    const options = {
        background: {
            color: {
                value: '#121212'
            }
        },
        preset: 'links'
    };

    return <Particles options={options} init={customInit} />;
};

export default ParticlesBackground;
