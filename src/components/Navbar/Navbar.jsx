import React from 'react';
import './navbar.scss';

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <input id='nav-toggle' type='checkbox' />
                <div className='logo'>Mesh</div>
                <ul className='links'>
                    <li>
                        <input
                            type='text'
                            placeholder='Search Mesh'
                            className='search'
                        />
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
