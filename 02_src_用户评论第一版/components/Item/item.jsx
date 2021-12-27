import React, { Component } from 'react'
import './css/item.css'

export default class Item extends Component {

    deleteHandel = (id) => {
        // 再状态中删除该条评论---获取该条评论的id
        const { deleteComment } = this.props;
        // 在组件中使用原生js的confirm要加window
        if (window.confirm('确定删除吗')) {
            deleteComment(id);

        }
    }

    render() {
        let { id, name, content } = this.props;
        return (
            <div>
                <li className="list-group-item">
                    <div className="handle">
                        <a href="#1" onClick={() => { this.deleteHandel(id) }}>删除</a>
                    </div>
                    <p className="user"><span >{name}</span><span>说:</span></p>
                    <p className="centence">{content}</p>
                </li>
            </div>
        )
    }
}