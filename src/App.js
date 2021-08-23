import React from 'react';
import Routes from './config/routes';
import { withRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <main>
      <Routes />
    </main>
  );
}

export default withRouter(App);
