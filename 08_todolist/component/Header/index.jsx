import React, { Component } from "react";
import { nanoid } from 'nanoid'
import './idnex.css'


export default class Header extends Component {

    handleKeyup = (e) => {
        const { keyCode, target } = e
        if (keyCode !== 13) return
        // 获取用户输入
        const { value: name } = target
        // 构建一个todoObj 
        const todoObj = { id: nanoid(), name, done: false }
        // 调用父组件传递过来的addTodo
        this.props.addTodo(todoObj)
        // 清空用户输入
        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyup} />
            </div>
        )
    }
}