import React, { useState } from 'react';

const Profile = (props) => {
    const [performances, setPerformances] = useState(props.performances);

    return (
        <div><h1>This is the Profile Page</h1></div>
    )
}

export default Profile;