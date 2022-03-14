import React, { FormEvent, useState } from 'react';
import axios from 'axios';
import config from '../../../config.json';
import { toast } from 'react-toastify';
import './registerInput.scss';
import { Link, useNavigate } from 'react-router-dom';

const RegisterInput = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    let navigate = useNavigate();

    const handleUsernameChange = (event: FormEvent) => {
        setUsername((event.target as HTMLInputElement).value);
    };

    const handleEmailChange = (event: FormEvent) => {
        setEmail((event.target as HTMLInputElement).value);
    };

    const handlePasswordChange = (event: FormEvent) => {
        setPassword((event.target as HTMLInputElement).value);
    };

    const clearValues = () => {
        setUsername('');
        setPassword('');
        setEmail('');
    };

    const handleSubmit = (event: FormEvent) => {
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

                    navigate('/');
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
                    maxLength={16}
                    minLength={4}
                    required
                    placeholder='Username'
                    onChange={handleUsernameChange}
                    value={username}
                    className={'input'}
                />
            </div>
            <div className='register__box'>
                <label htmlFor='mail'>
                    E-mail
                    <i className='fas fa-asterisk' />
                </label>
                <input
                    className={'input'}
                    id='mail'
                    type='email'
                    size={64}
                    maxLength={64}
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
                    className={'input'}
                    type='password'
                    minLength={6}
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
            <input
                type='submit'
                value='Create profile'
                id='register__btn'
                className={'input'}
            />
        </form>
    );
};

export default RegisterInput;
