import React, { useState } from 'react';
import '../App.css';

const Profile = (props) => {
    const [performances, setPerformances] = useState(props.performances);

    return (
        <div id="profile"><h1>This is the Profile Page</h1></div>
    )
}

export default Profile;