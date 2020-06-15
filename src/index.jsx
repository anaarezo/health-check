import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import History from './pages/History';

ReactDOM.render(
  <React.Fragment>
    <ThemeProvider theme={{ fontFamily: 'Roboto, sans-serif' }}>
      <GlobalStyle darkColor />
      <Header />
      <History />
      <Footer />
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById('root')
);