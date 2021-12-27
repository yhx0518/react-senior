import React, { Component } from "react";
import Search from "./component/Search";
import List from "./component/List";

export default class App extends Component {

    state = {
        users: [], // 用户信息
        isLoading: false, // 标识是否处于加载中
        isFirst: true, // 标识是否初次显示
        errorMsg: '' // 错误信息
    }

    // 更新App的状态
    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState} />
                <List {...this.state} />
            </div>
        );
    }
}