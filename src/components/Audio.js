import React from 'react';

const Audio = () => {
    return (
        <div id="audio">
            <h2>RECORDINGS</h2>
            <div className="audio-container">
                <p>Schumann: 3 Romances</p>
                <audio controls src="/schumann.mp3"></audio>
            </div>
            <div className="audio-container">
                <p>Ravel: Bolero</p>
                <audio controls src="/bolero.mp3"></audio>
            </div>
            <div className="audio-container">
                <p>Bach: Cello Suite No. 1, Gigue</p>
                <audio controls src="/bach.mp3"></audio>
            </div>
        </div>
    )
}

export default Audio;