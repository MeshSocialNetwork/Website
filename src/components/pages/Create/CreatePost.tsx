//@ts-nocheck
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import { toast } from 'react-toastify';
import React, { FormEvent, useState } from 'react';
import axios from 'axios';
import config from '../../../config.json';

const CreatePost = () => {
    let { state } = useLocation();
    let navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [community, setCommunity] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (event: FormEvent) => {
        setTitle((event.target as HTMLInputElement).value);
    };

    const handleContentChange = (event: FormEvent) => {
        setContent((event.target as HTMLInputElement).value);
    };

    const handleCommunityChange = (event: FormEvent) => {
        setCommunity((event.target as HTMLInputElement).value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const body = {
            title: title,
            content: content
        };

        axios
            .post(config.COMMUNITY_ENDPOINT + `/${community}`, body)
            .then((response) => {
                if (response.data.message) {
                    toast.success('Created post', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined
                    });

                    navigate(`/community/${community}`);
                }
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    };

    return (
        <>
            <Navbar state={state} />

            <form onSubmit={handleSubmit}>
                <input
                    id='title'
                    placeholder='Post title'
                    value={title}
                    onChange={handleTitleChange}
                />
                <input
                    id='content'
                    placeholder='Post content'
                    value={content}
                    onChange={handleContentChange}
                />
                <input
                    id='community'
                    placeholder='Community'
                    value={community}
                    onChange={handleCommunityChange}
                />
                <input type='submit' value='Create Post' />
            </form>
        </>
    );
};

export default CreatePost;
