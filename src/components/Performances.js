import React from 'react';
import Performance from './Performance';


const Performances = (props) => {
    const { performances, admin } = props;

    return (
        <div id="performances">
            {!admin && <h1>UPCOMING PERFORMANCES</h1>}
            {performances.length && (
                <table>
                    <thead>
                        <tr>
                            <td>Concert Name</td>
                            <td>Location</td>
                            <td>City</td>
                            <td>State</td>
                            <td>Date</td>
                            <td>Time</td>
                        </tr>
                    </thead>
                    <tbody>
                    {performances.map(performance => (<Performance performance={performance} key={performance.id} admin={admin} />))}
                    </tbody>
                </table>
            )}
            {!performances.length && <h2>No Upcoming Performances</h2>}
        </div>
    )
}

export default Performances;