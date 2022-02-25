import React, { useState } from 'react';
import axios from 'axios';
import config from '../../../config.json';
import { toast } from 'react-toastify';
import './registerInput.scss';
import { Link } from 'react-router-dom';

const RegisterInput = () => {
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
        <form id='register' onSubmit={handleSubmit}>
            <h2 id='register__title'>Create your profile</h2>
            <div className='register__box'>
                <label htmlFor='user'>
                    User
                    <i className='fas fa-asterisk' />
                </label>
                <input
                    id='user'
                    type='text'
                    maxLength='16'
                    minLength='4'
                    required
                    placeholder='Username'
                    onChange={handleUsernameChange}
                    value={username}
                />
            </div>
            <div className='register__box'>
                <label htmlFor='mail'>
                    E-mail
                    <i className='fas fa-asterisk' />
                </label>
                <input
                    id='mail'
                    type='email'
                    size='64'
                    maxLength='64'
                    required
                    placeholder='example@protonmail.com'
                    title='example@protonmail.com'
                    onChange={handleEmailChange}
                    value={email}
                />
            </div>
            <div className='register__box'>
                <label htmlFor='password'>
                    Password
                    <i className='fas fa-asterisk' />
                </label>
                <input
                    id='password'
                    type='password'
                    minLength='6'
                    required
                    placeholder='Password'
                    onChange={handlePasswordChange}
                    value={password}
                />
            </div>
            <div className='register__box'>
                <Link to={'/login'}>Already have an account?</Link>
            </div>
            <br />
            <input type='submit' value='Create profile' id='register__btn' />
        </form>
    );
};

export default RegisterInput;
