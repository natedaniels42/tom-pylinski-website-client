import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Profile from '../components/Profile';
import Login from '../components/Login';

export default () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
    </Switch>
)