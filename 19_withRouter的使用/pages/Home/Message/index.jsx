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

    pushShow = (id, title) => {
        return () => {
            this.props.history.push(`/home/message/detail/${id}/${title}`);
        }
    }

    back = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }

    replaceShow = (id, title) => {
        return () => {
            this.props.history.replace(`/home/message/detail/${id}/${title}`);
        }
    }

    go = () => {
        this.props.history.go(2);
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
                                    <Link to={`/home/message/detail/${mesObj.id}/${mesObj.title}`}>{mesObj.title}</Link>&nbsp;&nbsp;
                                    <button onClick={this.pushShow(mesObj.id, mesObj.title)}>push查看</button>
                                    <button onClick={this.replaceShow(mesObj.id, mesObj.title)}>replace查看</button>

                                    {/* 跳转路由时携带search(query)参数 */}
                                    {/* <Link to={`/home/message/detail?id=${mesObj.id}&title=${mesObj.title}`}>{mesObj.title}</Link> */}

                                    {/* 跳转时路由携带state参数 */}
                                    {/* <Link to={{ pathname: '/home/message/detail', state: { id: mesObj.id, title: mesObj.title } }}>{mesObj.title}</Link> */}
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go}>测试go方法</button>
                <hr />
                {/* 注册路由时，声明接受params参数 */}
                <Route path="/home/message/detail/:id/:title" component={Detail} />

                {/* 注册路由时，如果携带的是search参数，无需声明接受，直接注册即可 */}
                {/* <Route path='/home/message/detail' component={Detail} /> */}

                {/* 注册路由时，如果携带的是state参数，无需声明接受，直接注册即可 */}
                {/* <Route path='/home/message/detail' component={Detail} /> */}
            </div>
        )
    }
}