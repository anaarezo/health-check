import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme';
import HealthList from './HealthList/HealthList';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ fontFamily: 'Roboto, sans-serif' }}>
      <GlobalStyle darkColor />
      <HealthList />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);