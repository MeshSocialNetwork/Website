import React, { useState } from 'react';
const config = require('../../../config.json');
import './register.scss';
import ParticlesBackground from '../../Particles/ParticlesBackground';
import RegisterInput from '../../Input/Register/RegisterInput';

const Register = () => {
    return (
        <>
            <ParticlesBackground />
            <main>
                <RegisterInput />
            </main>
        </>
    );
};

export default Register;
