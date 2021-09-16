import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../containers/Home';
import Profile from '../components/Profile';
import Login from '../components/Login';

export default ({ performances, admin }) => (
    <Switch>
        <Route exact path='/' render={() => <Home performances={performances} admin={admin}/> } />
        <Route path='/admin' component={Login} />
        <Route path='/profile' render={() => sessionStorage.currentUser 
            ? <Profile performances={performances} admin={true}/>
            : <Redirect to='/admin' /> }/>
    </Switch>
)