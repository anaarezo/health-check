import React from 'react';
import ReactDOM from 'react-dom';
// import HealthList from './HealthList';
import AccordionExample from "./Accordion/Accordion.example";
import "./styles.css";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <HealthList /> */}
    <AccordionExample />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your HealthList to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
