import React from 'react';
import Bio from '../components/Bio';
import Audio from '../components/Audio';
import Quote from '../components/Quote';
import Performances from '../components/Performances';
import '../App.css';

const Home = (props) => {
    const { performances } = props;
    
    return (
        <div id="home">
            <div id="banner">
                <h1>THOMAS E. PYLINSKI, TROMBONE & EUPHONIUM</h1>
            </div>
            <div>
                <img id="profile-pic" src="tom.png" alt="Tom Pylinski with trombone"/>
            </div>
            <Bio />
            <Audio />
            <Quote />
            {performances.length && <Performances performances={performances} />}
        </div>
    )
}

export default Home;