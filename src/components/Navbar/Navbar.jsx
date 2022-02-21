import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './navbar.scss';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <input id='nav-toggle' type='checkbox' />
                <div className='logo'>Mesh</div>
                <ul className='links'>
                    <li>
                        <InputGroup
                            className='d-flex align-items-center'
                            controlId='search'
                        >
                            <Form.Control
                                type='text'
                                placeholder='Search Mesh'
                            />
                            <Button type='submit' variant='outline-secondary'>
                                <i className='fa-solid fa-magnifying-glass' />
                            </Button>
                        </InputGroup>
                    </li>
                    <li>
                        <a href='#'>
                            <i className='fa-solid fa-bell' />
                        </a>
                    </li>
                    <li>
                        <a>
                            <Link to={'/profile'}>
                                <i className='fa-solid fa-user' />
                            </Link>
                        </a>
                    </li>
                </ul>
                <label htmlFor='nav-toggle' className='icon-burger'>
                    <div className='line' />
                    <div className='line' />
                    <div className='line' />
                </label>
            </nav>
        );
    }
}

export default Navbar;
