import React from 'react';

const Audio = () => {
    return (
        <div id="audio">
            <p>Schumann 3 Romances</p>
            <audio controls src="/schumann.m4a"></audio><br/>
            <audio controls src="https://youtu.be/M9Xw6Se1qoA"></audio>
        </div>
    )
}

export default Audio;