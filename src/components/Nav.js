import React, { useLayoutEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../App.css';

const Nav = () => {
    useLayoutEffect(() => {
        const resize = () => {
            if (window.innerWidth > 850) {
                document.getElementById('hamburger').removeAttribute('style');
                document.getElementById('close').removeAttribute('style');
                document.getElementById('nav-box').removeAttribute('style');
                document.querySelector('nav').removeAttribute('style');
            }
        }
        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    }, []);

    

    const handleHamburgerClick = () => {
        document.getElementById('hamburger').style.visibility = 'hidden';
        document.getElementById('close').style.visibility = 'visible';
        document.getElementById('nav-box').style.visibility = 'visible';
        document.querySelector('nav').style.height = '100%';
    }

    const handleCloseClick = () => {
        if (window.innerWidth < 850) {
            document.getElementById('close').style.visibility = 'hidden';
            document.getElementById('hamburger').style.visibility = 'visible';
            document.getElementById('nav-box').style.visibility = 'hidden';
            document.querySelector('nav').style.height = '50px';
        }
    }
    
    return (
        <nav>
            <div id="nav-box">
                {sessionStorage.currentUser && (
                    <div className="nav-items" onClick={handleCloseClick}>
                        <Link to="/profile">Profile</Link>
                    </div>
                )}
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
                <div className="nav-items" onClick={handleCloseClick}>
                    <Link to="tom-pylinski-music-resume.pdf" target="_blank">Resume</Link>
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