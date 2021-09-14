import React from 'react';
import Performances from './Performances';
import '../App.css';

const Profile = (props) => {
    const { performances } = props;

    return (
        <div id="profile">
            <h1>This is the Profile Page</h1>
            {performances.length && <Performances performances={performances} />}
            {!performances.length && <p>No Performances Listed</p>}
        </div>
    )
}

export default Profile;