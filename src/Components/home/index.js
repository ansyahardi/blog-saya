import React, { Component } from 'react'
import Navbar from './Navbar';
import BadanKonten from './BadanKonten';


export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <BadanKonten />
      </>
    )
  }
}

