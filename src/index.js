import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import { BrowserRouter, Route,Switch,withRouter } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';


ReactDOM.render(
  <BrowserRouter>
    <div className="index">
          <Switch>
            <Route exact path="/" component={withRouter(Home)} />         
            <Route exact path="/AboutMe" component={withRouter(AboutMe)} />
            <Route exact path="/Home" component={withRouter(Home)} />
            <Route exact path="/Contact" component={withRouter(Contact)} />     
            <Route exact path="/Portfolio" component={withRouter(Portfolio)} />     
          </Switch>   
          <Header />
    </div>                              
  </BrowserRouter>,
   document.getElementById('root')
);

