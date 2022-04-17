//@ts-nocheck
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
const config = require('../../../config.json');

const Profile = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [isGif, setIsGif] = useState(false);

    let navigate = useNavigate();
    let { state }: any = useLocation();

    const validateSize = (file: File) => {
        const fileSize = file.size / 1024 / 1024;

        console.log(fileSize);

        if (fileSize >= 10) {
            console.log('File is too big');

            return false;
        } else {
            return true;
        }
    };

    const sendImageToCDN = (image: File) => {
        if (validateSize(image)) {
            if (image.name.includes('.gif')) {
                axios
                    .get(config.CHOOSE_CDN_ENDPOINT)
                    .then((result) => {
                        const cdnID = result.data.cdn.id;

                        const formData = new FormData();
                        formData.append('file', image);

                        axios({
                            method: 'post',
                            url:
                                config.CHOOSE_CDN_ENDPOINT +
                                `/${cdnID}/animated`,
                            data: formData,
                            headers: { 'Content-Type': 'multipart/form-data' }
                        })
                            .then((result) => {
                                const id = result.data.id;
                                const cdnId = result.data.cdnId;

                                axios({
                                    method: 'post',
                                    url: config.USER_IMAGE,
                                    data: {
                                        id: id,
                                        cdnId: cdnId,
                                        type: 'animated'
                                    }
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
                setIsGif(true);
            } else {
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
                                const id = result.data.id;
                                const cdnId = result.data.cdnId;

                                axios({
                                    method: 'post',
                                    url: config.USER_IMAGE,
                                    data: {
                                        id: id,
                                        cdnId: cdnId,
                                        type: 'image'
                                    }
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
            }
        } else {
            toast.error('Image is too large! (Over 10Mb)', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined
            });
        }
    };

    useEffect(() => {
        if (!state || !state.user || Object.keys(state.user).length === 0) {
            axios
                .get(config.CHECK_LOGIN_ENDPOINT)
                .then((result) => {
                    setUsername(result.data.name);
                    setEmail(result.data.email);
                    setImageURL(result.data.image);
                })
                .catch((error) => {
                    console.log(error.response.data.message);

                    navigate('/login');
                });
        } else {
            setUsername(state.user.name);
            setEmail(state.user.email);
            setImageURL(state.user.image);
        }
    }, []);

    const avatarStyle = {
        backgroundImage: `url(${imageURL})`,
        width: '150px',
        height: '150px',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        borderRadius: '50%'
    };

    return (
        <>
            <Navbar state={state} />

            <h1>{username}</h1>
            <h2>{email}</h2>

            <div id={'avatar'} style={avatarStyle}></div>

            <input
                type={'file'}
                name={'upload-image'}
                onChange={(event) => {
                    sendImageToCDN(event.target.files![0]);
                }}
            />
        </>
    );
};

export default Profile;
