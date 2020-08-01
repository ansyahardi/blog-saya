import React, { Component } from 'react'
import {Navbar} from '../Components/organisms';
import {BadanKonten} from '../Components/templates';


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

