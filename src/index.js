import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import App from './App';
import Profile from './components/pages/Profile/Profile';
import Settings from './components/pages/Settings/Settings';
import Team from './components/pages/Team/Team';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import User from './components/pages/User/User';
import Error from './components/pages/Error/Error';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
const config = require('./config.json');

Sentry.init({
    dsn: config.sentry_dsn,
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0
});

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
                <Route path={'/user/:username'} element={<User />} />
                <Route path={'/error'} element={<Error />} />
                <Route
                    path={'*'}
                    element={<Navigate to={'/error'} replace />}
                />
            </Routes>
        </BrowserRouter>
    </>,
    document.getElementById('root')
);
