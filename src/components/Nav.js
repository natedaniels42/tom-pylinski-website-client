import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../App.css';

const Nav = () => {
    const handleHamburgerClick = ({ target }) => {
        document.getElementById('hamburger').style.visibility = 'hidden';
        document.getElementById('close').style.visibility = 'visible';
        document.getElementById('nav-box').style.visibility = 'visible';
        document.querySelector('nav').style.height = '100%';
    }

    const handleCloseClick = ({ target }) => {
        document.getElementById('close').style.visibility = 'hidden';
        document.getElementById('hamburger').style.visibility = 'visible';
        document.getElementById('nav-box').style.visibility = 'hidden';
        document.querySelector('nav').style.height = '50px';
    }
    
    return (
        <nav>
            <div id="nav-box">
                <div className="nav-items" onClick={handleCloseClick}>
                    <Link to="/#banner">Home</Link>
                </div>
                <div className="nav-items" onClick={handleCloseClick}>
                    <Link to="/#bio">Bio</Link>
                </div>
                <div className="nav-items" onClick={handleCloseClick}>
                    <Link to="/#audio">Recordings</Link>
                </div>
                <div className="nav-items" onClick={handleCloseClick}>
                    <Link to="/#performances">Performances</Link>
                </div>
                <div className="nav-items" onClick={handleCloseClick}>
                    <Link to="/#quote">Quote</Link>
                </div>
                <div className="nav-items" onClick={handleCloseClick}>
                    <Link to="/#contact">Contact Me</Link>
                </div>
            </div>
            <div id="hamburger" onClick={handleHamburgerClick} >
                <i class="fas fa-bars"></i>
            </div>
            <div id="close" onClick={handleCloseClick}>
                <i class="fas fa-times"></i>
            </div>
        </nav>
    )
}

export default Nav;