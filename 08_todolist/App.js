import React, { Component } from 'react'
import Header from './component/Header/index.jsx'
import Footer from './component/Footer/index.jsx'
import List from './component/List/index.jsx'
import './App.css'

export default class App extends Component {

  // 初始化状态
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: false },
      { id: '003', name: '学习', done: false },
      { id: '004', name: '打人', done: false }
    ]
  }

  addTodo = (todoObj) => {
    // 获取原状态
    const { todos } = this.state
    // 更新状态
    this.setState({ todos: [todoObj, ...todos] })

  }

  // 勾选or取消勾选todo的回调
  checkTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map((t) => {
      if (t.id === id) return { ...t, done }
      else return t
    })
    this.setState({ todos: newTodos })
  }

  // 删除一个todo的回调
  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter((item) => {
      return item.id !== id
    })
    this.setState({ todos: newTodos })
  }

  //  全选or取消全选
  checkAll = (done) => {
    const { todos } = this.state
    const newTodos = todos.map((item) => {
      return { ...item, done }
    })
    this.setState({ todos: newTodos })
  }

  clearAll = () => {
    const { todos } = this.state
    const newTodos = todos.filter((item) => {
      return !item.done
    })
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List todos={todos} checkTodo={this.checkTodo} deleteTodo={this.deleteTodo} />
            <Footer todos={todos} checkAll={this.checkAll} clearAll={this.clearAll} />
          </div>
        </div>
      </div>
    )
  }
}