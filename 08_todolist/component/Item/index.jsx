import React, { Component } from "react";
import './idnex.css'


export default class Item extends Component {

    state = {
        mouseIn: false // 标识鼠标是否在当前todo项中
    }

    // 勾选or取消勾选一个todo的回调
    handelCheck = (id) => {
        return ({ target }) => {
            // 调用App传递过来的回调checkTodo
            this.props.checkTodo(id, target.checked)
        }
    }

    // 鼠标移入移出的回调
    handelMouse = (mouseIn) => {
        return () => {
            this.setState({ mouseIn })
        }
    }

    // 删除按钮的回调
    handelDelete = (id) => {
        /* eslint-disable */
        if (confirm('确认删除吗？')) {
            this.props.deleteTodo(id)
        }
    }


    render() {
        const { id, name, done } = this.props
        const { mouseIn } = this.state
        return (
            <li onMouseEnter={this.handelMouse(true)} onMouseLeave={this.handelMouse(false)} style={{ background: mouseIn ? '#ddd' : 'white' }}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handelCheck(id)} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" onClick={() => { this.handelDelete(id) }} style={{ display: mouseIn ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}