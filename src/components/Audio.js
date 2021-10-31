import React from 'react';

const Audio = () => {
    return (
        <div id="audio">
            <h2>RECORDINGS</h2>
            <div className="audio-container">
                <p>Robert Schumann: 3 Romances, I. Nicht Schnell</p>
                <audio controls src="/schumann.mp3"></audio>
            </div>
            <div className="audio-container">
                <p>Maurice Ravel: Bolero</p>
                <audio controls src="/bolero.mp3"></audio>
            </div>
            <div className="audio-container">
                <p>J.S. Bach: Cello Suite No. 1, Gigue</p>
                <audio controls src="/bach.mp3"></audio>
            </div>
        </div>
    )
}

export default Audio;