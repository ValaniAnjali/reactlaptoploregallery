import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a separate CSS file

const Header = () => {
    return (
        <header>
            <h1>LAPTOP LORE GALLERY</h1>
            <nav>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/aboutUs">ABOUT US</Link></li>
                    <li><Link to="/laptops">LAPTOPS</Link></li>
                    <li><Link to="/contactus">CONTACT US</Link></li>
                    <li><Link to="/feedback">FEEDBACK</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
