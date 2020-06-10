import React from 'react';
import ReactDOM from 'react-dom';
import HealthList from './HealthList/HealthList';

import "./styles.css";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>

    <HealthList />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your HealthList to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
