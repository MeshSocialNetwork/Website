import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Profile from './components/pages/Profile/Profile';
import Settings from './components/pages/Settings/Settings';
import Team from './components/pages/Team/Team';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
    <>
        <BrowserRouter>
            <ToastContainer
                theme={'dark'}
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Routes>
                <Route path={'/'} element={<App />} />
                <Route path={'/profile'} element={<Profile />} />
                <Route path={'/settings'} element={<Settings />} />
                <Route path={'/team'} element={<Team />} />
                <Route path={'/login'} element={<Login />} />
                <Route path={'/register'} element={<Register />} />
            </Routes>
        </BrowserRouter>
    </>,
    document.getElementById('root')
);
