import React from 'react';
import Performance from './Performance';


const Performances = (props) => {
    const { performances, admin } = props;

    return (
        <div id={admin ? "" : "performances"}>
            {!admin && <h1>UPCOMING PERFORMANCES</h1>}
            {performances.length && (
                <table>
                    <thead>
                        <tr>
                            <td className="table-header">Concert Name</td>
                            <td className="table-header">Location</td>
                            <td className="table-header">City</td>
                            <td className="table-header">State</td>
                            <td className="table-header">Date</td>
                            <td className="table-header">Time</td>
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