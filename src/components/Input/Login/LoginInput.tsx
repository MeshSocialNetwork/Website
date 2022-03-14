import React, { FormEvent, useState } from 'react';
import axios from 'axios';
import config from '../../../config.json';
import { toast } from 'react-toastify';
import './loginInput.scss';
import { Link, useNavigate } from 'react-router-dom';

const LoginInput = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const handleUsernameChange = (event: FormEvent) => {
        setUsername((event.target as HTMLInputElement).value);
    };

    const handlePasswordChange = (event: FormEvent) => {
        setPassword((event.target as HTMLInputElement).value);
    };

    const handleSubmit = (event: FormEvent) => {
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

                    navigate('/');
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
        <form id='register' onSubmit={handleSubmit}>
            <h2 id='register__title'>Login</h2>
            <div className='register__box'>
                <label htmlFor='user'>
                    User
                    <i className='fas fa-asterisk' />
                </label>
                <input
                    id='user'
                    className={'input'}
                    type='text'
                    maxLength={16}
                    minLength={4}
                    required
                    placeholder='Username'
                    onChange={handleUsernameChange}
                    value={username}
                />
            </div>
            <div className='register__box'>
                <label htmlFor='password'>
                    Password
                    <i className='fas fa-asterisk' />
                </label>
                <input
                    className={'input'}
                    id='password'
                    type='password'
                    minLength={6}
                    required
                    placeholder='Password'
                    onChange={handlePasswordChange}
                    value={password}
                />
            </div>
            <div className='register__box'>
                <Link to={'/register'}>Dont have an account?</Link>
            </div>
            <br />
            <input
                type='submit'
                className={'input'}
                value='Login'
                id='register__btn'
            />
        </form>
    );
};

export default LoginInput;
