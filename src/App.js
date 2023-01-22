import React, { useState, useEffect } from 'react';
import Routes from './config/routes';
import { withRouter } from 'react-router-dom';
import PerformanceModel from './models/Performance';
import './App.css';

import Nav from './components/Nav';

const App = () => {
  const [performances, setPerformances] = useState([]);
  const [admin] = useState(false);

  useEffect(() => {
    PerformanceModel.getAllPerformances()
      .then((result) => {
        setPerformances(result);
    })
  })

  

  return (
    <div>
      <Nav />
      <main>
        <Routes performances={performances} admin={admin} />
      </main>
    </div>
  );
}

export default withRouter(App);
