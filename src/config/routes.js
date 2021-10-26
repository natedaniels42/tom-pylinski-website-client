import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../containers/Home';
import Profile from '../components/Profile';
import Login from '../components/Login';
import Resources from '../containers/Resources';

export default ({ performances, admin }) => (
    <Switch>
        <Route exact path='/' render={() => <Home performances={performances} admin={admin}/> } />
        <Route path='/admin' component={Login} />
        <Route path='/profile' render={() => sessionStorage.currentUser 
            ? <Profile performances={performances} admin={true}/>
            : <Redirect to='/admin' /> }/>
        <Route path='/resources' component={Resources} />
    </Switch>
)