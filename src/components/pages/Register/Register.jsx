import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const config = require('../../../config.json');

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: ''
        };
    }

    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value });
    };

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
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
            .post(config.REGISTER_ENDPOINT, credentials)
            .then((response) => {
                if (response.data.message) {
                    console.log('Registered successfully');

                    return <Redirect to={'/'} />;
                } else {
                    console.log('Something went wrong');
                }
            })
            .catch((error) => console.log(error.response.data.message));
    };

    render() {
        return (
            <>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder={'E-Mail'}
                        type={'email'}
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
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
                    <button type={'submit'}>Register</button>
                </form>
            </>
        );
    }
}

export default Register;
