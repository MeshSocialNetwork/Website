import React, { useEffect, useState } from 'react';
import App from '../../../App';
import axios from 'axios';
const config = require('../../../config.json');

const Profile = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [verified, setVerified] = useState(false);

    useEffect(() => {
        axios
            .get(config.CHECK_LOGIN_ENDPOINT)
            .then((result) => {
                const username = setUsername(result.data.name);
                const email = setEmail(result.data.email);
                const verified = setVerified(result.data.emailVerified);
            })
            .catch((error) => {
                console.log(error.response.data.message);

                window.location = '/login';
            });
    }, []);

    return (
        <>
            <App />

            <h1>{username}</h1>
            <h2>{email}</h2>
            <h3>{verified}</h3>
        </>
    );
};

export default Profile;
