import React, { Component } from "react";
import './idnex.css'

export default class Footer extends Component {

    //  全选or取消全选
    handelCheckAll = (e) => {
        const { checked } = e.target
        this.props.checkAll(checked)
    }

    render() {
        const { todos } = this.props
        const total = todos.length
        const doneTotal = todos.reduce((preValue, current) => {
            return preValue + (current.done ? 1 : 0)
        }, 0)
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handelCheckAll} checked={total === doneTotal && total !== 0 ? true : false} />
                </label>
                <span>
                    <span>已完成{doneTotal}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.props.clearAll}>清除已完成任务</button>
            </div>
        )
    }
}