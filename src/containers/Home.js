import React, { useState, useEffect } from 'react';
import Bio from '../components/Bio';
import Audio from '../components/Audio';
import Quote from '../components/Quote';
import Performances from '../components/Performances';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import '../App.css';

const Home = (props) => {
    const pics = ['tom.png', 'tom2.jpeg', 'tom3.jpg'];
    const { performances } = props;

    const [active, setActive] = useState(true);
    const [index, setIndex] = useState(0)
    
    useEffect(() => {
        document.getElementById('hamburger').removeAttribute('style');
        document.getElementById('close').removeAttribute('style');
        document.getElementById('nav-box').removeAttribute('style');
        document.querySelector('nav').removeAttribute('style');
        
        if (active && window.innerWidth > 850) {
            const timer = setTimeout( () => {
                document.getElementById(`tom${(index + 1) % 3}`).style.backgroundColor = 'black';
                document.getElementById(`tom${index}`).style.backgroundColor = 'white';
                setIndex(prev => (prev + 1) % 3);
            }, 5000);
            return () => {
                clearTimeout(timer);
            }
        }
    }, [index]);

    const handleClick = (event) => {
        setActive(false);
        const imgs = document.getElementsByClassName('img-button');
        for (let img of imgs) {
            img.style.backgroundColor = 'white';
        }
        event.target.style.backgroundColor = 'black';

        setIndex(Number(event.target.id[3]));
    } 

    return (
        <div id="home">
            <div id="banner">
                <h1>THOMAS E. PYLINSKI, TROMBONE & EUPHONIUM</h1>
            </div>
            <div id="img-container">
                <img id="profile-pic" src={pics[index]} alt="Tom Pylinski with trombone"/>
                <div className="img-button" id="tom0" onClick={handleClick}></div>
                <div className="img-button" id="tom1" onClick={handleClick}></div>
                <div className="img-button" id="tom2" onClick={handleClick}></div>
            </div>
            <Bio />
            <Audio />
            {performances.length && <Performances performances={performances} />}
            <Quote />
            <Contact />
            <Resume />
        </div>
    )
}

export default Home;