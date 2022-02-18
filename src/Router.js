import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';


const AppRouter = () => {
    return(
      <Router>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={ Projects} />
              <Route exact path="/skills" component={Skills} />
              
          </Switch>
      </Router>
    )
}

export default AppRouter;