import React, { Fragment, Component } from 'react';
// import Navbar from 'react-bootstrap/Navbar'
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar } from './style';


export default class Header extends Component {

  render() {

    return (
      <Fragment>
            <Navbar  bg="dark" variant="dark">
              <Navbar.Brand>Book Library</Navbar.Brand>
            </Navbar>
      </Fragment>
    )
  }
}

