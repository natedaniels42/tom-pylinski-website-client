import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Profile from '../components/Profile';
import Login from '../components/Login';

export default ({ performances }) => (
    <Switch>
        <Route exact path='/' render={() => <Home performances={performances} />} />
        <Route path='/admin' component={Login} />
        <Route path='/profile' render={() => <Profile performances={performances} />}/>
    </Switch>
)