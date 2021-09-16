import React, { useState } from 'react';
import PerformanceModel from '../models/Performance';

const Performance = (props) => {
    const { performance, admin } = props;
    const [update, setUpdate] = useState(false);
    const [name, setName] = useState(performance.name);
    const [location, setLocation] = useState(performance.location);
    const [city, setCity] = useState(performance.city);
    const [state, setState] = useState(performance.state);
    const [date, setDate] = useState(performance.date);
    const [time, setTime] = useState(performance.time);

    const handleClick = () => {
        setUpdate(true);
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     PerformanceModel.updatePerformance
    // }

    return (
        <div>
            <p>{performance.name}</p>
            <p>{performance.location}</p>
            <p>{performance.city}</p>
            <p>{performance.state}</p>
            <p>{performance.date}</p>
            <p>{performance.time}</p>
            {admin && (
                <div>
                    {!update && <button onClick={handleClick}>Update</button>}
                    {update && (
                        <form>
                            <label htmlFor="name">Concert Name:</label>
                            <input name="name" value={name} onChange={event => setName(event.target.value)} type="text" />
                            <label htmlFor="location">Location:</label>
                            <input name="location" value={location} onChange={event => setLocation(event.target.value)} type="text" />
                            <label htmlFor="city">City:</label>
                            <input name="city" value={city} onChange={event => setCity(event.target.value)} type="text" />
                            <label htmlFor="state">State:</label>
                            <select name="state" onChange={event => setState(event.target.value)} value={state} >
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
                            </select>
                            <label htmlFor="date">Date:</label>
                            <input type="date" value={date} onChange={event => setDate(event.target.value)} name="date" />
                            <label htmlFor="time">Time:</label>
                            <input type="time" value={time} onChange={event => setTime(event.target.value)} name="time" />
                            <button type="submit">Update</button>
                        </form>
                    )}
                    {!update && <button>Delete</button>}
                </div>
            )}
        </div>
    )
}

export default Performance;