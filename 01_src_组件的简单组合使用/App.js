import React, { Component } from "react"
import Hello from "./components/hello/Hello.jsx"
import Peiqi from './components/peiqi/Peiqi.jsx'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Hello />
        <Peiqi />
      </div>
    )
  }
}