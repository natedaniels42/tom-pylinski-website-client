import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import setAuthHeader from '../utils/setAuthHeader';
import '../App.css';

const url = 'http://localhost:4000/api/v1/auth/login';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const setCurrentUser = (token) => {
        localStorage.setItem('token', token);
        setAuthHeader(token);
        const decodedToken = jwt_decode(token);
        localStorage.setItem('currentUser', decodedToken.id);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'email') {
            setEmail(value);
        } else {
            setPassword(value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post(url, {email, password})
            .then((res) => {
                console.log(res.data.token);
                setCurrentUser(res.data.token);
                props.history.push('/profile');
            })
            .catch((err) => {
                console.log(err);
                
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input onChange={handleChange} type="text" name="email" value={email} />
            <label htmlFor="password">Password: </label>
            <input onChange={handleChange} type="password" name="password" value={password} />
            <button type="submit">Login</button>
        </form>
    )
}

export default withRouter(Login);