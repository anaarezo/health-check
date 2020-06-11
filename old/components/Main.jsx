
import React, { Component, Fragment } from 'react'
import { Navbar } from './style';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './ownStyle.css'

import CardList from './CardList'

import data from  '../data/data.json'


export default class Main extends Component {

  render() {

    return (
      <Fragment>
            <Navbar  bg="dark" variant="dark">
              <Navbar.Brand>Main</Navbar.Brand>
            </Navbar>
            <CardList />
      </Fragment>
    )
  }
}

