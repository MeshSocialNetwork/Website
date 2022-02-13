import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './navbar.scss';

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <input id='nav-toggle' type='checkbox' />
                <div className='logo'>Mesh</div>
                <ul className='links'>
                    <li>
                        <InputGroup className="d-flex align-items-center" controlId="search">
                            <Form.Control type="text" placeholder="Search Mesh" />
                            <Button type="submit" variant="outline-secondary"><i class="fa-solid fa-magnifying-glass"></i></Button>
                        </InputGroup>
                    </li>
                    <li>
                        <a href='#'>
                            <i className='fa-solid fa-bell'></i>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i className='fa-solid fa-user'></i>
                        </a>
                    </li>
                </ul>
                <label htmlFor='nav-toggle' className='icon-burger'>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </label>
            </nav>
        );
    }
}

export default Navbar;
