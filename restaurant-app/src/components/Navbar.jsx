import React, { useState } from 'react';
import '../CSS/navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faTimes} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    // setting the initial value of click to false(not clicked)
    const [click, setClick] = useState(false);

    // if icon is clicked set value of click to true(clicked)
    const iconClick = () => setClick(!click);

    // function to close the mobile menu
    // set the value of click to false in order to close the mobile menu
    // later on down the menu I will add this function on an onClick event on each menu item
    const closeMobileMenu = () => setClick(false);

    // if escape key is pressed
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            closeMobileMenu();
        }
    });

    // useEffect(() => {

    // })
    
    return ( 
        <div className="navbar-section">
            <div className="logo-container">
                <h1 className="logo-name">Cap75-Eatery</h1>
            </div>

            {/* hamburger button */}
            <div className="hamburger-btn">
                {/* change the type of icon based on the click variable */}
                <FontAwesomeIcon icon={click ? faTimes : faHamburger} onClick={iconClick}/>
            </div>

            {/* navigation */}
            <nav className={click ? 'nav-container active' : 'nav-container'}>
                <ul className="menu-nav">
                    <li className="menu-nav__item">
                        <Link to="/" onClick={closeMobileMenu} className="menu-nav__link">Home</Link>
                    </li>
                    <li className='menu-nav__item'>
                        <Link to="/about" onClick={closeMobileMenu} className="menu-nav__link">About</Link>
                    </li>
                    <li className='menu-nav__item'>
                        <Link to="/products" onClick={closeMobileMenu} className="menu-nav__link">Products</Link>
                    </li>
                    <li className='menu-nav__item'>
                        <Link to="/contacts" onClick={closeMobileMenu} className="menu-nav__link">Contacts</Link>
                    </li>
                </ul>
            </nav>
        </div>
     );
}

export default Navbar;