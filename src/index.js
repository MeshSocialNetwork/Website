import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Profile from './components/pages/Profile/Profile';
import Settings from './components/pages/Settings/Settings';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<App />} />
            <Route path={'/profile'} element={<Profile />} />
            <Route path={'/settings'} element={<Settings />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
