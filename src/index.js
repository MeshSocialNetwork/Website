import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Profile from './components/pages/Profile/Profile';
import Settings from './components/pages/Settings/Settings';
import Team from './components/pages/Team/Team';

ReactDOM.render(
    <>
        <BrowserRouter>
            <App />
            <Routes>
                <Route path={'/profile'} element={<Profile />} />
                <Route path={'/settings'} element={<Settings />} />
                <Route path={'/team'} element={<Team />} />
            </Routes>
        </BrowserRouter>
    </>,
    document.getElementById('root')
);
