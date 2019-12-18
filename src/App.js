/**
 * 应用根组件
 */
import React, { Component } from 'react'
//BrowserRouter 路径不带# HashRouter路径带有#
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Admin from './pages/Admin/admin'
export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>{/**有<Switch>标签，则其中的<Route>在路径相同的情况下，只匹配第一个，这个可以避免重复匹配；
                 * 无<Switch>标签，则其中的<Route>在路径相同的情况下全都会匹配。更严重的是，还会匹配上级路径的 */}
                    <Route path='/' component={Admin}></Route>
                </Switch>
            </BrowserRouter>
        )

    }
}