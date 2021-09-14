import React from 'react';

const Performance = (props) => {
    const { performance } = props;
    return (
        <div>
            <p>{performance.name}</p>
            <p>{performance.location}</p>
            <p>{performance.city}</p>
            <p>{performance.state}</p>
            <p>{performance.date}</p>
            <p>{performance.time}</p>
        </div>
    )
}

export default Performance;