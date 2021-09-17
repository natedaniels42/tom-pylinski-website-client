import React from 'react';

const Audio = () => {
    return (
        <div id="audio">
            <h1>RECORDINGS</h1>
            <div>
                <p>Schumann: 3 Romances</p>
                <audio controls src="/schumann.m4a"></audio>
            </div>
            <div>
                <p>Ravel: Bolero</p>
                <audio controls src="/tom-bolero.m4a"></audio>
            </div>
            <div>
                <p>Bach: Cello Suite No. 1, Gigue</p>
                <audio controls src="/tom-bach.m4a"></audio>
            </div>
        </div>
    )
}

export default Audio;