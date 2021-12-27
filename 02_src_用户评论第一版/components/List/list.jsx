import React, { Component } from 'react'
import Item from '../Item/item'
import './css/list.css'

export default class List extends Component {
    render() {
        let { comments, deleteComment } = this.props;
        return (
            <div>
                <div className="col-md-8">
                    <h3 className="reply">评论回复：</h3>
                    <h2 style={{ display: comments.length === 0 ? 'block' : 'none' }}>暂无评论，点击左侧添加评论！！！</h2>
                    <ul className="list-group">
                        {
                            comments.map((item) => {
                                // console.log({ ...item }); 
                                // 传递标签属性的简化写法
                                return <Item key={item.id} {...item} deleteComment={deleteComment} />
                                // return <Item key={item.id} name={item.name} content={item.content} />
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}