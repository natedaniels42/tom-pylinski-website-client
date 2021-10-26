import React, { useState, useEffect } from 'react';
import Performance from './Performance';


const Performances = (props) => {
    const { performances, admin } = props;
    const [month, setMonth] = useState(new Date().getUTCMonth());
    const [year, setYear] = useState(new Date().getUTCFullYear());
    const [currentPerformances, setCurrentPerformances] = useState([]);
    const [active, setActive] = useState(false);

    useEffect(() => {
        setCurrentPerformances(performances.filter(performance => {
            const date = new Date(performance.date);
            const performanceMonth = date.getUTCMonth();
            const performanceYear = date.getUTCFullYear();

            return performanceMonth === month && performanceYear === year;
        })
        .sort((a,b) => new Date(a.date) - new Date(b.date)))
    }, [month, year]);

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
        setActive(false);
    }

    const handleClick = () => {
        setActive(true);
    }

    return (
        <div id={admin ? "" : "performances"}>
            <h2>PERFORMANCES</h2>
            {active && (
                <React.Fragment>
                    <label htmlFor="date">Choose month to View Performances:</label><br/>
                    <input type="month" name="date" onChange={handleChange}/>
                </React.Fragment>
            )}
            {!active && <button className="black" onClick={handleClick}>Change Month</button>}
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