import React from 'react';
import Routes from './config/routes';
import { withRouter } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default withRouter(App);
