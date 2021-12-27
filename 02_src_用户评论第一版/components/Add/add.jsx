import React, { Component } from "react"
import { v4 as uuidv4 } from 'uuid';

export default class Add extends Component {
    addHandel = () => {
        let { addComment } = this.props
        // 1. 获取用户输入
        let name = this.refs.name.value;
        let content = this.content.value;
        // console.log(name.value, content.value);
        // 2. 校验数据
        if (!name.trim() || !content.trim()) {
            return alert('名字和内容均不能为空');
        }
        // 3. 将更新的数据维护到状态中
        addComment({ id: uuidv4(), name, content });
        // 4. 清空输入
        this.refs.name.value = '';
        this.content.value = '';
        /* console.log(name, content);
        name = '';
        content = '';
        console.log(name, content);
        console.log(this); */
    }
    render() {
        return (
            <div>
                <div className="col-md-4">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label>用户名</label>
                            <input type="text" className="form-control" placeholder="用户名" ref="name" />
                        </div>
                        <div className="form-group">
                            <label>评论内容</label>
                            <textarea className="form-control" rows="6" placeholder="评论内容" ref={(content) => { this.content = content }}></textarea>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="button" className="btn btn-default pull-right" onClick={this.addHandel}>提交</button>
                            </div>
                        </div>
                    </form>
                </div >
            </div >
        )
    }
}