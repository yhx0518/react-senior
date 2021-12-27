import React, { Component } from "react";

const mockData = [
    { id: '001', content: '你好，未来' },
    { id: '002', content: '你好，现在' },
    { id: '003', content: '再见，过去' }
]

export default class Detail extends Component {
    render() {

        // 获取传递过来的params参数
        const { id, title } = this.props.match.params

        // 获取传递过来的search参数
        /* const { search } = this.props.location
        const { id, title } = qs.parse(search.slice(1)); */
        // console.log(result);

        // 获取传递过来的state参数
        // const { id, title } = this.props.location.state


        const result = mockData.find(detailObj => detailObj.id === id) || {}

        return (
            <ul>
                <li>ID: {id}</li>
                <li>Title: {title}</li>
                <li>Content: {result.content}</li>
            </ul>
        )
    }
}