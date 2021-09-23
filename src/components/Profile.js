import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Performances from './Performances';
import PerformanceModel from '../models/Performance';
import '../App.css';

const Profile = (props) => {
    const { performances, admin, history } = props;
    const [ add, setAdd ] = useState(false);
    const [inputs, setInputs] = useState({});

    const handleClick = () => {
        setAdd(true);
    }

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        PerformanceModel.createPerformance(inputs)
            .then((result) => {
                console.log(result);
            })
        setAdd(false);
        history.push('/profile');
    }

    const handleCancel = (event) => {
        setAdd(false);
    }

    return (
        <div id="profile">
            <h1>This is the Profile Page</h1>
            {performances.length && <Performances performances={performances} admin={admin} />}
            {!performances.length && <p>No Performances Listed</p>}
            {!add && <button onClick={handleClick}>Add Performance</button>}
            {add && (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Concert Name:</label>
                    <input name="name" value={inputs.name} onChange={handleInputChange} type="text" />
                    <label htmlFor="location">Location:</label>
                    <input name="location" value={inputs.location} onChange={handleInputChange} type="text" />
                    <label htmlFor="city">City:</label>
                    <input name="city" value={inputs.city} onChange={handleInputChange} type="text" />
                    <label htmlFor="state">State:</label>
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
                    </select>
                    <label htmlFor="date">Date:</label>
                    <input type="date" onChange={handleInputChange} name="date" />
                    <label htmlFor="time">Time:</label>
                    <input type="time" onChange={handleInputChange} name="time" />
                    <button type="submit">Add Performance</button>
                </form>
            )}
            {add && <button onClick={handleCancel}>Cancel</button>}
        </div>
    )
}

export default withRouter(Profile);