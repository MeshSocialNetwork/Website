import React, { useEffect, useState } from 'react';
import App from '../../../App';
import axios from 'axios';

const config = require('../../../config.json');

const Profile = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [verified, setVerified] = useState(false);
    const [image, setImage] = useState(null);
    const [cdnID, setCdnID] = useState('');

    const sendImageToCDN = () => {
        axios
            .get(config.CHOOSE_CDN_ENDPOINT)
            .then((result) => {
                setCdnID(result.data.cdn.id);
            })
            .catch((error) => console.log(error));

        const formData = new FormData();
        formData.append('file', image);

        console.log(cdnID);

        axios
            .post(config.CHOOSE_CDN_ENDPOINT + `${cdnID}/image`, formData)
            .then((result) => {
                console.log('image upload req made');

                console.log(result);
            })
            .catch((error) => console.log(error));
    };

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

            <img src={''} alt={''} className={'avatar'} />

            <h1>{username}</h1>
            <h2>{email}</h2>
            <h3>{verified}</h3>

            <input
                type={'file'}
                name={'upload-image'}
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setImage(event.target.files[0]);
                    sendImageToCDN();
                }}
            />
        </>
    );
};

export default Profile;
