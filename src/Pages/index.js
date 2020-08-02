import React, { Component } from 'react';
import {Navbar} from '../Components/organisms';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Populer from './Populer';
import Home from './Home';
import PopulerDiTag from './PopulerDiTag';
import Kontak from './Kontak';
import TentangSaya from './TentangSaya';
import Blog from './Blog';

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
          <Route path="/Kontak">
            <Kontak/>
          </Route>
          <Route path="/Tentang">
            <TentangSaya/>
          </Route>
          <Route path="/PopulerDiTag/:ardi" component={PopulerDiTag} />
          <Route path="/">
            {/* <Home/> */}
            <Blog/>
          </Route>
        </Switch>
      </Router>
    )
  }
}
