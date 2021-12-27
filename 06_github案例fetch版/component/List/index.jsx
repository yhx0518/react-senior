import React, { Component } from "react";
import Pubsub from 'pubsub-js';
import './index.css'

export default class List extends Component {

    state = {
        users: [], // 用户信息
        isLoading: false, // 标识是否处于加载中
        isFirst: true, // 标识是否初次显示
        errorMsg: '' // 错误信息
    }

    // 订阅消息
    componentDidMount() {
        // 订阅消息
        this.token = Pubsub.subscribe('updateListState', (msg, stateObj) => {
            this.setState(stateObj)
        })
    }

    componentWillUnmount() {
        // 取消订阅
        Pubsub.unsubscribe(this.token)
    }

    render() {
        const { users, isLoading, isFirst, errorMsg } = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h1>欢迎使用</h1> :
                        isLoading ? <h1>Loading...</h1> :
                            errorMsg ? <h1>{errorMsg}</h1> :
                                users.map((userObj) => {
                                    return (
                                        <div key={userObj.id} className="card">
                                            <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                                <img src={userObj.avatar_url} style={{ width: '100px' }} alt="pic" />
                                            </a>
                                            <p className="card-text">{userObj.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        );
    }
}