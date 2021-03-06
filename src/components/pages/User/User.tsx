import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import App from '../../../App';
import { Spinner } from 'react-bootstrap';

const User = (props: any) => {
    let params = useParams();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [chosenName, setChosenName] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get(`/api/user/${params.username}`)
            .then((result) => {
                setImageURL(result.data.image);
                setChosenName(result.data.chosenName);
                setUsername(result.data.name);
                setLoaded(true);
            })
            .catch((error) => {
                console.log(error);

                console.log('in catch');

                navigate('/error', {
                    state: {
                        error: 'no-user'
                    }
                });
            });
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
            <App />

            {loaded ? (
                <div>
                    <h1>{username}</h1>
                    <h2>{chosenName}</h2>
                    <div id={'avatar'} style={avatarStyle}></div>
                </div>
            ) : (
                <Spinner animation='border' variant='light' />
            )}
        </>
    );
};

export default User;
