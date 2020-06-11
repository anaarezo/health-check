import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme';
// import HealthList from './components/HealthList';
import AccordionExample from './components/Accordion/Accordion.example';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ fontFamily: 'Roboto, sans-serif' }}>
      <GlobalStyle darkColor />
      <AccordionExample />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);