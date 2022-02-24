import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
const config = require('../../../config.json');

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const clearValues = () => {
        setUsername('');
        setPassword('');
        setEmail('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const credentials = {
            username: username,
            password: password,
            email: email
        };

        axios
            .post(config.REGISTER_ENDPOINT, credentials)
            .then((response) => {
                if (response.data.message) {
                    console.log('Registered successfully');

                    return (window.location = '/');
                }
            })
            .catch((error) => {
                const errorMsg = error.response.data.message;

                console.log(error.response.data.message);

                if (error.response.data.message === 'Email already used') {
                    toast.error('This E-Mail is already used!', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined
                    });
                } else if (errorMsg === 'User already exists') {
                    toast.error('This username is already used!', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined
                    });
                }

                clearValues();
            });
    };

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder={'E-Mail'}
                    type={'email'}
                    value={email}
                    onChange={handleEmailChange}
                />
                <input
                    placeholder={'Username'}
                    type={'text'}
                    value={username}
                    onChange={handleUsernameChange}
                />
                <input
                    placeholder={'Password'}
                    type={'password'}
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button type={'submit'}>Register</button>
            </form>
        </>
    );
};

export default Register;
