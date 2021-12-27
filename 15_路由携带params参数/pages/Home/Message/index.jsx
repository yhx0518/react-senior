import React, { Component } from "react";
import { Link, Route } from 'react-router-dom'
import Detail from "./Detail";

export default class Message extends Component {

    state = {
        messageArr: [
            { id: '001', title: '消息1' },
            { id: '002', title: '消息2' },
            { id: '003', title: '消息3' }
        ]
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map((mesObj) => {
                            return (
                                <li key={mesObj.id}>
                                    {/* 跳转路由时携带params参数 */}
                                    <Link to={`/home/message/detail/${mesObj.id}/${mesObj.title}`}>{mesObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* 注册路由时，声明接受params参数 */}
                <Route path="/home/message/detail/:id/:title" component={Detail} />
            </div>
        )
    }
}