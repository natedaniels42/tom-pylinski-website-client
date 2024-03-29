import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PerformanceModel from '../models/Performance';

const Performance = (props) => {
    const { performance, admin, history } = props;
    const [inputs, setInputs] = useState({});
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        setInputs(performance);
    }, [performance]);

    const handleClick = () => {
        setUpdate(true);
    }

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        PerformanceModel.updatePerformance(inputs, performance._id)
            .then((result) => {
                console.log(result);
            })
        setUpdate(false);
        history.push('/profile');
    }

    const handleDelete = (event) => {
        event.preventDefault();
        PerformanceModel.deletePerformance(performance._id)
            .then((result) => {
                console.log(result);
            })
        history.push('/profile');
    }

    const formatTime = (time) => {
        time = time.split(':');
        let letters = time[0] >= 12 ? 'PM' : 'AM';
        if (time[0] > 12) {
            time[0] = time[0] - 12;
        }
        return time.join(':') + letters;
    }

    const date = new Date(performance.date);

    return (
            <tr>
                <td className="table-data">{performance.name}</td>
                <td className="table-data">{performance.location}</td>
                <td className="table-data">{performance.city}</td>
                <td className="table-data">{performance.state}</td>
                <td className="table-data">{`${date.getUTCMonth() + 1}/${date.getUTCDate()}/${date.getUTCFullYear()}`}</td>
                <td className="table-data">{formatTime(performance.time)}</td>
                {admin && (
                    <React.Fragment>
                        {!update && (
                            <td>
                                <div>
                                    <button onClick={handleClick}>Update</button>
                                    <button onClick={handleDelete}>Delete</button>
                                </div>
                            </td>
                        )}
                        {update && (
                            <td colSpan="2">
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="name">Concert Name:</label><br/>
                                    <input name="name" value={inputs.name} onChange={handleInputChange} type="text" /><br/>
                                    <label htmlFor="location">Location:</label><br/>
                                    <input name="location" value={inputs.location} onChange={handleInputChange} type="text" /><br/>
                                    <label htmlFor="city">City:</label><br/>
                                    <input name="city" value={inputs.city} onChange={handleInputChange} type="text" /><br/>
                                    <label htmlFor="state">State:</label><br/>
                                    <select name="state" onChange={handleInputChange} value={inputs.state} >
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">District Of Columbia</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                    </select><br/>
                                    <label htmlFor="date">Date:</label><br/>
                                    <input type="date" onChange={handleInputChange} name="date" /><br/>
                                    <label htmlFor="time">Time:</label><br/>
                                    <input type="time" onChange={handleInputChange} name="time" /><br/>
                                    <button type="submit">Update</button>
                                </form>    
                            </td>
                        )}
                    </React.Fragment>
            )} 
        </tr>
    )
}

export default withRouter(Performance);