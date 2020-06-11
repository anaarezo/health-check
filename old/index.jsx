import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme';
// import HealthList from './components/HealthList';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ fontFamily: 'Roboto, sans-serif' }}>
      <GlobalStyle darkColor />
        <Header />
        <Main />
        <Footer /> 
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);