//@ts-nocheck
import { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import axios from 'axios';
import config from '../../../config.json';
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
import Post from '../../Post/Post';

const Community = () => {
    let params = useParams();
    let navigate = useNavigate();
    let { state }: any = useLocation();

    const [communityName, setCommunityName] = useState('');
    const [communityDescription, setCommunityDescription] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [posts, setPosts] = useState([]);

    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    const subscribeCommunity = () => {
        axios
            .get(config.COMMUNITY_ENDPOINT + `/${communityName}/subscribe`)
            .then((result) => {
                toast.success('Subscribed!', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined
                });

                setIsSubscribed(true);
                forceUpdate();
            });
    };

    const unsubscribeCommunity = () => {
        axios
            .get(config.COMMUNITY_ENDPOINT + `/${communityName}/unsubscribe`)
            .then((result) => {
                toast.success('Unsubscribed!', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined
                });

                setIsSubscribed(false);
                forceUpdate();
            });
    };

    useEffect(() => {
        axios
            .get(config.COMMUNITY_ENDPOINT + `/${params.name}`)
            .then((result) => {
                setCommunityName(result.data.name);
                setCommunityDescription(result.data.description);
                setIsSubscribed(result.data.subscribed);

                setPosts(result.data.posts);
            })
            .catch((error) => {
                console.log(error.response.data.message);

                toast.error('This community doesnt exist, create one!', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined
                });

                navigate('/create/community');
            });
    }, [params.name]);

    return (
        <>
            <Navbar state={state} />

            <p>Name: {communityName}</p>
            <p>Description: {communityDescription}</p>

            {isSubscribed ? (
                <Button onClick={unsubscribeCommunity}>Unsubscribe</Button>
            ) : (
                <Button onClick={subscribeCommunity}>Subscribe</Button>
            )}

            {posts.map((post) => (
                <Post id={post.id} title={post.title} content={post.content} />
            ))}
        </>
    );
};

export default Community;
