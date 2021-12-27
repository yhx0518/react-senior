import React, { Component } from "react";
import axios from 'axios'


export default class Search extends Component {

    search = () => {
        const { keyWord } = this
        // 请求之前要：讲isLoading变为true， 讲isFirst变为fasle
        this.props.updateAppState({ isLoading: true, isFirst: false })
        axios.get(`https://api.github.com/search/users?q=${keyWord.value}`)
            .then(
                response => {
                    console.log('成功了', response.data);
                    // 请求成功后讲isLoading变为false
                    this.props.updateAppState({ isLoading: false, users: response.data.items })
                },
                error => {
                    console.log('失败了');
                    this.props.updateAppState({ isLoading: false, errorMsg: error.message })
                }
            )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">GITHUB用户搜索案例</h3>
                <div>
                    <input ref={c => this.keyWord = c} type="text" placeholder="请输入用户名随后搜索" />&nbsp;<button onClick={this.search}>搜索</button>
                </div>
            </section>
        );
    }
}