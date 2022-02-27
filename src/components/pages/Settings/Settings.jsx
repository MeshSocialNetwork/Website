import React from 'react';
import Navbar from '../../Navbar/Navbar';
import { useLocation } from 'react-router-dom';

const Settings = () => {
    let { state } = useLocation();

    return (
        <>
            <Navbar state={state} />
            <p>Settings</p>
        </>
    );
};

export default Settings;
