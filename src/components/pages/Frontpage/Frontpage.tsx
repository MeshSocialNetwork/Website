//@ts-nocheck
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import App from '../../../App';
import Post from '../../Post/Post';
const config = require('../../../config.json');

const Frontpage = (props: any) => {
    const [posts, setPosts] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        axios
            .get(config.FRONTPAGE_ENDPOINT)
            .then((result) => {
                setPosts(result.data);

                console.log(result);
            })
            .catch((error) => {
                console.log(error);

                navigate('/error', {
                    state: {
                        error: 'no-user'
                    }
                });
            });
    }, []);

    return (
        <>
            {posts.map((post) => (
                <Post id={post.id} title={post.title} content={post.content} />
            ))}
        </>
    );
};

export default Frontpage;
