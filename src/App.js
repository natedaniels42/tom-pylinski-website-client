import React, { useState, useEffect } from 'react';
import Routes from './config/routes';
import { withRouter } from 'react-router-dom';
import PerformanceModel from './models/Performance';
import './App.css';

import Nav from './components/Nav';

const App = () => {
  const [performances, setPerformances] = useState([]);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    PerformanceModel.getAllPerformances()
      .then((result) => {
        setPerformances(result
          .filter(performance => new Date(`${performance.date} ${performance.time}`) > new Date())
          .sort((a,b) => new Date(`${a.date} ${a.time}`) - new Date(`${b.date} ${b.time}`)))
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
