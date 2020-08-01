import React, { Component } from 'react';
import {BadanKonten} from '../Components/templates';
import {Navbar} from '../Components/organisms';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Populer from './Populer';
import Home from './Home';
import PopulerDiTag from './PopulerDiTag';

export default class index extends Component {
  render() {

    return (
      <Router>
        <Navbar/>

        <Switch>
          <Route path="/Home">
            <Home/>
          </Route>
          <Route path="/Populer">
            <Populer/>
          </Route>
          <Route path="/PopulerDiTag/:ardi" component={PopulerDiTag} />
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    )
  }
}
