import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import App from '../../../App';

const User = (props) => {
    let params = useParams();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [chosenName, setChosenName] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get(`/api/user/${params.username}`)
            .then((result) => {
                setImageUrl(result.data.image);
                setChosenName(result.data.chosenName);
                setUsername(result.data.name);
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

    return (
        <>
            <App />

            <h1>{username}</h1>
            <h2>{chosenName}</h2>
            <img src={imageUrl} alt={''} />
        </>
    );
};

export default User;
