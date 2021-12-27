import React, { Component, createRef } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js';

export default class Search extends Component {

    myRef = createRef();

    searchHandel = () => {
        // const { updateAppState } = this.props; 用于更新App的状态，从而触发list组件重新渲染
        // 1. 获取用户输入
        let keyword = this.myRef.current.value;
        // 2. 校验数据
        if (keyword.trim() === '') return alert('输入不能为空')
        // 3. 发请求
        const URL = `https://api.github.com/search/users?q=${keyword}`;
        // 请求之前更新数据 为了显示loading

        PubSub.publish('hhxy', {
            users: [],
            isFirst: false,
            isLoading: true,
            error: ''
        })


        axios.get(URL)
            .then((value) => {
                // 若成功，更新数据
                PubSub.publish('hhxy', {
                    users: value.data.items,
                    isFirst: false,
                    isLoading: false,
                    error: ''
                })
            })
            .catch((error) => {
                PubSub.publish('hhxy', {
                    users: [],
                    isFirst: false,
                    isLoading: true,
                    error: error.message
                })
            })
        // 4. 清空输入
        this.myRef.current.value = '';
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="输入搜索关键字" ref={this.myRef} />&nbsp;
                <button onClick={this.searchHandel}>搜索</button>
            </div>
        )
    }
}