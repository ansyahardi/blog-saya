import React from 'react';
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
import Provider from '../Components/Provier';

export default function index() {

    return (
      <Router>
        <Provider>
          <Navbar/>

          <Switch>
            <Route path={`/Home`}>
              <Home/>
            </Route>
            <Route path={`/Populer`}>
              <Populer/>
            </Route>
            <Route path={`/Kontak`}>
              <Kontak/>
            </Route>
            <Route path={`/Tentang`}>
              <TentangSaya/>
            </Route>
            <Route path={`/post`}>
              <Blog/>
            </Route>
            <Route path={`/PopulerDiTag/:ardi`} component={PopulerDiTag} />
            <Route path={`/`}>
              <Home/>
            </Route>
          </Switch>
        </Provider>
      </Router>
    )
}
