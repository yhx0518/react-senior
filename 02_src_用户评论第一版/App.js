import React, { Component } from 'react'
import Add from './components/Add/add.jsx'
import List from './components/List/list.jsx'

export default class App extends Component {

  state = {
    comments: [
      { id: 'u77ohu7-frfr4t', name: 'yhx', content: '很简单' },
      { id: 'y78asd3-asda12', name: 'gyq', content: '没学过' },
      { id: '12ui3y2-ads88a', name: '佩奇', content: '不用学' }
    ]
  }

  // 用于添加一条评论
  addComment = (commentObj) => {
    /* 
      特别注意：state中的数据：1、不能直接修改 2、不能直接更新
    */
    // console.log(commentObj);
    // 1. 获取原状态
    // let { comments } = this.state; 不要这样获取状态中的对象类型数据，后期可能产生一些问题
    let comments = [...this.state.comments]
    // 2. 追加数据
    // 下面一行代码就属于state直接更新
    comments.unshift(commentObj);
    // 3. 新数据维护到状态中
    this.setState({ comments });
  }

  // 用于删除一条评论
  deleteComment = (id) => {
    // console.log(`我帮你删除了编号为${id}的评论`);
    // 1. 获取原状态
    let comments = [...this.state.comments];
    // 2. 删除数组中id与传递的id相同的那个对象
    /* comments.map((item, index) => {
      if (item.id === id) {
        comments.splice(index, 1);
      }
    }); */
    comments = comments.filter((item) => {
      return item.id !== id;
    })
    this.setState({ comments })
  }

  render() {
    let { comments } = this.state;
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add addComment={this.addComment} />
          <List comments={comments} deleteComment={this.deleteComment} />

        </div>
      </div>
    )
  }
}