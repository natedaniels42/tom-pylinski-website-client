import React from 'react';
import Performance from './Performance';


const Performances = (props) => {
    const { performances, admin } = props;

    return (
        <div>
            {performances.map(performance => <Performance performance={performance} key={performance.id} admin={admin} />)}
        </div>
    )
}

export default Performances;