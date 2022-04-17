import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { NavDropdown, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.scss';
import logo from '../../images/mesh-logo.png';
import axios from 'axios';
import config from '../../config.json';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    let { state }: any = useLocation();

    if (!state) {
        state = {};
    }

    if (!state.user) {
        state.user = {};
    }

    let userInState = false;

    if (state.user) {
        if (Object.keys(state.user).length > 0) {
            userInState = true;
        }
    }

    const [userLoaded, setUserLoaded] = useState(userInState);
    const [user, setUser] = useState(state.user);

    useEffect(() => {
        if (!userLoaded) {
            axios
                .get(config.CHECK_LOGIN_ENDPOINT)
                .then((result) => {
                    if (result.status === 200) {
                        const isUserLoaded = true;
                        setUserLoaded(isUserLoaded);
                        setUser(result.data);
                    }
                })
                .catch((error) => console.log(error));
        }
    }, []);

    return (
        <nav className='nav'>
            <input
                type='checkbox'
                id='nav__checkbox'
                className='nav__checkbox'
            />
            <label htmlFor='nav__checkbox' className='nav__toggle'>
                <svg className='menu' viewBox='0 0 448 512' width='100'>
                    <path d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z' />
                </svg>
                <svg className='close' viewBox='0 0 384 512' width='100'>
                    <path d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z' />
                </svg>
            </label>
            <ul className='nav__menu'>
                <li>
                    <Link to={'/'} state={{ user: user }}>
                        <img src={logo} alt={''} className={'logo'} />
                    </Link>
                </li>
                <li>
                    <Link to='/profile' state={{ user: user }}>
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to='/settings' state={{ user: user }}>
                        Settings
                    </Link>
                </li>
                <li>
                    <Link to='/team' state={{ user: user }}>
                        Team
                    </Link>
                </li>
                <li>
                    {!userLoaded ? (
                        <Link to={'/login'} state={{ user: user }}>
                            Sign in
                        </Link>
                    ) : (
                        <Link to={'/logout'} state={{ user: user }}>
                            Logout
                        </Link>
                    )}
                </li>
                <li>
                    <InputGroup className='d-flex align-items-center input-group'>
                        <Form.Control type='text' placeholder='Search Mesh' />
                        <Button type='submit' variant='outline-secondary'>
                            <i className='fa-solid fa-magnifying-glass' />
                        </Button>
                    </InputGroup>
                </li>
                <li>
                    <NavDropdown
                        id='nav-dropdown-dark-example'
                        title='Create'
                        menuVariant='dark'
                        color='white'
                    >
                        <NavDropdown.Item href='/create/community'>
                            Community
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/create/post'>
                            Post
                        </NavDropdown.Item>
                    </NavDropdown>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
