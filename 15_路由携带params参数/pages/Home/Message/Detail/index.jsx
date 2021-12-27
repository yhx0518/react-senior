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

        const result = mockData.find(detailObj => detailObj.id === id)

        return (
            <ul>
                <li>ID: {id}</li>
                <li>Title: {title}</li>
                <li>Content: {result.content}</li>
            </ul>
        )
    }
}