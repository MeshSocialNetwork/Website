import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useEffect } from 'react';
const axios = require('axios');
const config = require('./config.json');

function App() {
    /* useEffect(() => {
        axios
            .get(config.CHECK_LOGIN_ENDPOINT)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => console.log(error));
    }); */

    return (
        <>
            <Navbar />
        </>
    );
}

export default App;
