import React, { Component } from "react";
import Home from "./pages/Home";
import About from './pages/About'
import Header from "./component/Header";
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'


export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原生html写法 */}
                            {/* <a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item active" href="./home.html">Home</a> */}

                            {/* react中  使用？？？路径的切换*/}
                            <NavLink activeClassName="demo" className="list-group-item" to="/about/a/b/c">About</NavLink>
                            <NavLink activeClassName="demo" className="list-group-item" to="/home/a/b/c">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    {/* 注册路由 */}
                                    <Route path="/about/a/b" component={About} />
                                    <Route path="/home/a/b" exact={true} component={Home} />
                                    <Redirect to="/about" />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}