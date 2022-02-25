import React, { useState } from 'react';
import ParticlesBackground from '../../Particles/ParticlesBackground';
import LoginInput from '../../Input/Login/LoginInput';

const Login = () => {
    return (
        <>
            <ParticlesBackground />
            <main>
                <LoginInput />
            </main>
        </>
    );
};

export default Login;
