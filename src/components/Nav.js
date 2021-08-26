import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Nav = () => {
    return (
        <nav>
            <div className="nav-items">
                <Link to="/#banner">Home</Link>
            </div>
            <div className="nav-items">
                <Link to="/#bio">Bio</Link>
            </div>
            <div className="nav-items">
                <Link to="/#audio">Recordings</Link>
            </div>
            <div className="nav-items">
                <Link to="/#quote">Quote</Link>
            </div>
            <div className="nav-items">
                <Link to="/#contact">Contact Me</Link>
            </div>
        </nav>
    )
}

export default Nav;