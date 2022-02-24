import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import config from '../../../config.json';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const credentials = {
            username: username,
            password: password
        };

        axios
            .post(config.LOGIN_ENDPOINT, credentials)
            .then((response) => {
                if (response.data.message) {
                    console.log('Logged in successfully');

                    return (window.location = '/');
                }
            })
            .catch((error) => {
                console.log(error.response.data.message);

                toast.error('Login failed! Wrong password / username', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined
                });
            });
    };

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
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
                <button type={'submit'}>Login</button>
            </form>
        </>
    );
};

export default Login;
