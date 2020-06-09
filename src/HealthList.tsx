import React from 'react';
import './index.css';
// import data from './data/data.json';

import logo from './logo.svg';
import './HealthList.css';

function HealthList() {
  return (
    <div className="HealthList">
      <header className="HealthList-header">
        <img src={logo} className="HealthList-logo" alt="logo" />
        <h1>Hello dev</h1>
        <p>
          Edit <code>src/HealthList.tsx</code> and save to reload.
        </p>
        <a
          className="HealthList-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default HealthList;