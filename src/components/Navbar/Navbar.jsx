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
                <div className='logo'>Mesh</div>
                <ul className='links'>
                    <li>
                        <InputGroup
                            className='d-flex align-items-center input-group'
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
                        <button className={'notification-button'}>
                            <i className='fa-solid fa-bell' />
                        </button>
                    </li>
                    <li>
                        <button className={'profile-button'}>
                            <Link to={'/profile'}>
                                <i className='fa-solid fa-user' />
                            </Link>
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
