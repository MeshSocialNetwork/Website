import React, { useState } from 'react';
import axios from 'axios';
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
                } else {
                    console.log('Something went wrong');
                }
            })
            .catch((error) => console.log(error.response.data.message));
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
