import React from 'react';
import './Tenders.css';
import ApplicationViews from './components/ApplicationViews';
import NavBar from './components/nav/Nav';
import { BrowserRouter as Router } from 'react-router-dom';


function Tenders() {
  return (
    <>
      <Router>
        <NavBar />
        <ApplicationViews />
      </Router>
    </>
  );
}

export default Tenders;
