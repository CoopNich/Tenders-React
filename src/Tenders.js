import React, { useEffect } from 'react';
import './Tenders.css';
import ApplicationViews from './components/ApplicationViews';
import NavBar from './components/nav/Nav';
import SearchBar from './components/search/SearchBar'
import { BrowserRouter as Router } from 'react-router-dom';


function Tenders() {

  return (
    <>
      <Router>
      <NavBar />
      <SearchBar />
      <ApplicationViews />
      </Router>
    </>
  );
}

export default Tenders;
