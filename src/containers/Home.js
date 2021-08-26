import React from 'react';
import Bio from '../components/Bio';
import Audio from '../components/Audio';
import Quote from '../components/Quote';
import '../App.css';

const Home = () => {
    return (
        <div id="home">
            <div id="banner">
                <h1>THOMAS E. PYLINSKI, TROMBONE & EUPHONIUM</h1>
            </div>
            <div>
                <img id="profile-pic" src="tom.png" />
            </div>
            <Bio />
            <Audio />
            <Quote />
        </div>
    )
}

export default Home;