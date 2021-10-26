import React from 'react';
import '../App.css';

const Quote = () => {
    return (
        <div id="quote">
            <div id="quote-image">
                <img src="trombone-cartoon.webp" />
            </div>
            <div id="quote-text">
                <p>"The trombone is the true head of the family of wind instruments... 
                    it has all the serious and powerful tones of sublime musical poetry, 
                    from religious, calm and imposing accents to savage, orgiastic outburst."
                </p>
                <p>Hector Berlioz</p>
            </div>
        </div>
    )
}

export default Quote;