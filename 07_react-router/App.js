import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'

export default class App extends Component {


  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">

              <NavLink activeClassName="demo" className="list-group-item" href="./about.html" to="/about" >About</NavLink>
              <NavLink activeClassName="demo" className="list-group-item" href="./home.html" to="/home" >Home</NavLink>

            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}