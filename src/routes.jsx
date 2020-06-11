import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import History from './pages/History';

const Routes = () => {
  return(
    <BrowserRouter>
      <Route component={Home} path="/" exact /> 
      <Route component={History} path="/history" />
    </BrowserRouter>
  );
}

export default Routes;