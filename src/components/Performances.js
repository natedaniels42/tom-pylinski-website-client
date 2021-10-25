import React, { useState } from 'react';
import Performance from './Performance';


const Performances = (props) => {
    const { performances, admin } = props;
    const [month, setMonth] = useState(new Date().getUTCMonth());
    const [year, setYear] = useState(new Date().getUTCFullYear());
    const [currentPerformances, setCurrentPerformances] = useState(performances
        .filter(performance => {
            const date = new Date(performance.date);
            const performanceMonth = date.getUTCMonth();
            const performanceYear = date.getUTCFullYear();

            return performanceMonth === month && performanceYear === year;
        })
        .sort((a,b) => new Date(a.date) - new Date(b.date)))

    const handleChange = ({ target }) => {
        const date = new Date(target.value);
        setMonth(date.getUTCMonth());
        setYear(date.getUTCFullYear());
        setCurrentPerformances(performances.filter(performance => {
            const date = new Date(performance.date);
            const performanceMonth = date.getUTCMonth();
            const performanceYear = date.getUTCFullYear();

            return performanceMonth === month && performanceYear === year;        
        }))
    }

    return (
        <div id={admin ? "" : "performances"}>
            {!admin && <h1>UPCOMING PERFORMANCES</h1>}
            <label htmlFor="date">Choose month of performances:</label><br/>
            <input type="date" name="date" onChange={handleChange}/>
            {currentPerformances.length > 0 && (
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
                    {currentPerformances.map(performance => (<Performance performance={performance} key={performance.id} admin={admin} />))}
                    </tbody>
                </table>
            )}
            {currentPerformances.length === 0 && <h2>No Performances for This Month</h2>}
        </div>
    )
}

export default Performances;