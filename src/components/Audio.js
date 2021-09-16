import React from 'react';

const Audio = () => {
    return (
        <div id="audio">
            <h1>RECORDINGS</h1>
            <div>
                <p>Schumann 3 Romances</p>
                <audio controls src="/schumann.m4a"></audio>
            </div>
            <div>
                <audio controls src="https://youtu.be/M9Xw6Se1qoA"></audio>
            </div>
        </div>
    )
}

export default Audio;