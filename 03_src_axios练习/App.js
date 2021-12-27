import React, { Component } from "react"
// import axios from 'axios'

export default class App extends Component {

  state = {
    repName: '', //仓库的名字
    resUrl: '', //仓库的地址
    isLoading: true,  // 控制是否展示loading
    keyword: 'v', // 搜索关键词
    error: '' // 错误
  }

  componentDidMount() {
    const URL = `https://api.github.com/search/repositories?q=${this.state.keyword}&sort=stars`
    // 发送ajax请求
    /* axios.get(URL)
      .then((value) => {
        const { name, html_url } = value.data.items[0];
        console.log(value);
        console.log(value.data.items[0].name);
        console.log(value.data.items[0].html_url);
        this.setState({
          repName: name,
          resUrl: html_url,
          isLoading: false
        });
      })
      .catch((reason) => {
        console.log(reason);
        this.setState({
          isLoading: false,
          error: reason.message
        })
      }) */
    fetch(URL)
      .then(function (response) {
        console.log(response);
        if (response.status !== 200) {
          return Promise.reject(new Error('请求资源失败'))
        } else {
          return response.json();
        }
      })
      .then((result) => {
        console.log(result);
        const { name, html_url } = result.items[0];
        this.setState({
          repName: name,
          resUrl: html_url,
          isLoading: false
        })
      })
      .catch((reason) => {
        console.log(reason);
        this.setState({
          isLoading: false,
          error: reason.message
        })
      })
  }

  render() {
    const { repName, resUrl, isLoading, error, keyword } = this.state
    if (isLoading) {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      )
    } else if (repName && resUrl && !error) {
      return (
        <div>
          <h2>在GitHub上以【{keyword}】字母开头的仓库，点赞最多的是<a href={resUrl}>{repName}</a></h2>
        </div>
      )
    } else {
      return <h2 style={{ color: 'red' }}>{error}</h2>
    }
  }
}