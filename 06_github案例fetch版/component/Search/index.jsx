import React, { Component } from "react";
import Pubsub from 'pubsub-js';
import axios from "axios";


export default class Search extends Component {

    search = async () => {
        const { keyWord } = this
        // 请求之前要：将List组件的isLoading变为true， 将List组件的isFirst变为fasle
        // this.props.updateAppState({ isLoading: true, isFirst: false })
        Pubsub.publish('updateListState', { isLoading: true, isFirst: false })




        /* axios.get(`https://api.github.com/search/users?q=${keyWord.value}`)
            .then(
                response => {
                    console.log('成功了', response.data);
                    // 请求成功后将List组件的isLoading变为false
                    // this.props.updateAppState({ isLoading: false, users: response.data.items })
                    Pubsub.publish('updateListState', { isLoading: false, users: response.data.items })

                },
                error => {
                    console.log('失败了');
                    // this.props.updateAppState({ isLoading: false, errorMsg: error.message })
                    Pubsub.publish('updateListState', { isLoading: false, errorMsg: error.message })
                }
            ) */

        // 使用Fetch发送请求
        /* const x = fetch(`https://api.github.com/search/users?q=${keyWord.value}`)
            .then(
                response => {
                    console.log('联系服务器成功了', response);
                    return response.json()
                },
                error => {
                    console.log('联系服务器失败了', error);
                }
            ).then(
                response2 => { console.log('获取数据成功了', response2); },
            )
            .catch(
                error => console.log('请求失败')
            )
        console.log(x); */

        try {
            const result = await axios.get(`https://api.github.com/search/users?q=${keyWord.value}`)
            console.log(result.data);
        } catch (error) {
            console.log(error);
        }

        /* try {
            const response = await fetch(`https://api.github.com/search/users?q=${keyWord.value}`)
            const result = await response.json()
            console.log(result);
        } catch (error) {
            console.log('失败了', error);
        } */
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