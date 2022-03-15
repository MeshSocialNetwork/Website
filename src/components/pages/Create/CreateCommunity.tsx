//@ts-nocheck
import { useLocation } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import { toast } from 'react-toastify';
import React, { FormEvent, useState } from 'react';
import axios from 'axios';
import config from '../../../config.json';

const CreateCommunity = () => {
    let { state } = useLocation();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const validateCommunityName = (name: string) => {
        if (name.includes(' ')) {
            return false;
        } else {
            return true;
        }
    };

    const handleNameChange = (event: FormEvent) => {
        setName((event.target as HTMLInputElement).value);
    };

    const handleDescriptionChange = (event: FormEvent) => {
        setDescription((event.target as HTMLInputElement).value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (!validateCommunityName(name)) {
            return toast.error('Invalid community name', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined
            });
        }

        const body = {
            name: name,
            description: description
        };

        axios
            .post(config.COMMUNITY_ENDPOINT, body)
            .then((response) => {
                if (response.data.message) {
                    console.log('Created community');

                    //TODO: redirect to created community

                    toast.success('Created community', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined
                    });

                    setName('');
                    setDescription('');
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
                    id='name'
                    placeholder='Community name'
                    value={name}
                    onChange={handleNameChange}
                />
                <input
                    id='description'
                    placeholder='Community description'
                    value={description}
                    onChange={handleDescriptionChange}
                />
                <input type='submit' value='Create community' />
            </form>
        </>
    );
};

export default CreateCommunity;
