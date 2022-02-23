import React from 'react';
import axios from 'axios';
import config from '../../../config.json';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value });
    };

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const credentials = this.state;

        console.log(credentials);
        console.log(this.state.username);

        axios
            .post(config.LOGIN_ENDPOINT, credentials)
            .then((response) => {
                if (response.data.message) {
                    console.log('Logged in successfully');

                    return (window.location = '/');
                } else {
                    console.log('Something went wrong');
                }
            })
            .catch((error) => console.log(error.response.data.message));
    };

    render() {
        return (
            <>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder={'Username'}
                        type={'text'}
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                    />
                    <input
                        placeholder={'Password'}
                        type={'password'}
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                    />
                    <button type={'submit'}>Login</button>
                </form>
            </>
        );
    }
}

export default Login;
