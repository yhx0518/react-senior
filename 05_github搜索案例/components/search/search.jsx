import React, { Component, createRef } from 'react'
import axios from 'axios'

export default class Search extends Component {

    myRef = createRef();

    searchHandel = () => {
        const { updateAppState } = this.props;
        // 1. 获取用户输入
        let keyword = this.myRef.current.value;
        // 2. 校验数据
        if (keyword.trim() === '') return alert('输入不能为空')
        // 3. 发请求
        const URL = `https://api.github.com/search/users?q=${keyword}`;
        // 请求之前更新数据 为了显示loading
        updateAppState({
            users: [],
            isFirst: false,
            isLoading: true,
            error: ''
        })
        axios.get(URL)
            .then((value) => {
                // 若成功，更新数据
                updateAppState({
                    users: value.data.items,
                    isFirst: false,
                    isLoading: false,
                    error: ''
                })
            })
            .catch((error) => {
                updateAppState({
                    // 若失败，更新数据
                    users: [],
                    isFirst: false,
                    isLoading: false,
                    error: error.mesage
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