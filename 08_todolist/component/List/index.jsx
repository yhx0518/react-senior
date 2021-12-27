import React, { Component } from "react";
import Item from "../Item";
import './idnex.css'


export default class List extends Component {

    render() {
        const { todos, checkTodo, deleteTodo } = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((item) => {
                        return <Item key={item.id} {...item} checkTodo={checkTodo} deleteTodo={deleteTodo} />
                    })
                }
            </ul>
        )
    }
}