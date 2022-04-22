import React from 'react';
import '../CSS/navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <div className="navbar-section">
            <div className="logo-container">
                <h1 className="logo-name">Cap75-Eatery</h1>
            </div>

            {/* navigation */}
            <nav className='nav-container'>
                <ul className="menu-nav">
                    <li className="menu-nav__item">
                        <Link to="/" className="menu-nav__link">Home</Link>
                    </li>
                    <li className='menu-nav__item'>
                        <Link to="/about" className="menu-nav__link">About</Link>
                    </li>
                    <li className='menu-nav__item'>
                        <Link to="/products" className="menu-nav__link">Products</Link>
                    </li>
                    <li className='menu-nav__item'>
                        <Link to="/contacts" className="menu-nav__link">Contacts</Link>
                    </li>
                </ul>
            </nav>
        </div>
     );
}

export default Navbar;