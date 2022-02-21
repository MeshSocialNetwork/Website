import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Profile from './components/Profile/Profile';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<App />} />
            <Route path={'/profile'} element={<Profile />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
