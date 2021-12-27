import React, { Component } from 'react'
import List from './components/list/list'
import Search from './components/search/search'

export default class App extends Component {


  render() {
    return (
      <div>
        <div className="container">
          <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            {/* 搜索组件 */}
            <Search />
          </section>
          {/* list */}
          <List />
        </div>
      </div>
    )
  }
}