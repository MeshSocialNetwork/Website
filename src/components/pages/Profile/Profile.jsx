import React, { useEffect, useState } from 'react';
import App from '../../../App';
import axios from 'axios';
import { toast } from 'react-toastify';
import './profile.scss';

const config = require('../../../config.json');

const Profile = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [imageURL, setImageURL] = useState('');

    const sendImageToCDN = (image) => {
        axios
            .get(config.CHOOSE_CDN_ENDPOINT)
            .then((result) => {
                const cdnID = result.data.cdn.id;

                const formData = new FormData();
                formData.append('file', image);

                axios({
                    method: 'post',
                    url: config.CHOOSE_CDN_ENDPOINT + `/${cdnID}/image`,
                    data: formData,
                    headers: { 'Content-Type': 'multipart/form-data' }
                })
                    .then((result) => {
                        const imageId = result.data.imageId;
                        const cdnId = result.data.cdnId;

                        axios({
                            method: 'post',
                            url: config.USER_IMAGE,
                            data: { imageId: imageId, cdnId: cdnId }
                        }).then((result) => {
                            toast.success('Uploaded profile picture!', {
                                position: 'top-right',
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: false,
                                draggable: false,
                                progress: undefined
                            });
                        });
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        axios
            .get(config.CHECK_LOGIN_ENDPOINT)
            .then((result) => {
                setUsername(result.data.name);
                setEmail(result.data.email);
                setImageURL(result.data.image);
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

            <img src={imageURL} alt={''} className={'avatar'} />

            <input
                type={'file'}
                name={'upload-image'}
                onChange={(event) => {
                    sendImageToCDN(event.target.files[0]);
                }}
            />
        </>
    );
};

export default Profile;
