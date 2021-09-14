import React from 'react';
import Performance from './Performance';


const Performances = (props) => {
    const { performances } = props;

    return (
        <div>
            {performances.map(performance => <Performance performance={performance} />)}
        </div>
    )
}

export default Performances;