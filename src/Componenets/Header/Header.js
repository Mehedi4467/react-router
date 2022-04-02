import React from 'react';
// import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';


const Header = () => {
    return (
        <header>
            <nav className='menu-bar'>
                <ul>
                    <li><CustomLink to='/'>Home</CustomLink></li>
                    <li><CustomLink to='/shop'>Shop</CustomLink></li>
                    <li><CustomLink to='/about'>About</CustomLink></li>
                    <li><CustomLink to='/contact'>Contact</CustomLink></li>
                </ul>

            </nav>
        </header >
    );
};

export default Header;