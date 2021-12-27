import React, { Component } from "react";
import './index.css'

export default class List extends Component {
    render() {
        const { users, isLoading, isFirst, errorMsg } = this.props
        return (
            <div className="row">
                {
                    isFirst ? <h1>欢迎使用</h1> :
                        isLoading ? <h1>Loading...</h1> :
                            errorMsg ? <h1>{errorMsg}</h1> :
                                users.map((userObj) => {
                                    return (
                                        <div key={userObj.id} className="card">
                                            <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                                <img src={userObj.avatar_url} style={{ width: '100px' }} alt="pic" />
                                            </a>
                                            <p className="card-text">{userObj.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        );
    }
}