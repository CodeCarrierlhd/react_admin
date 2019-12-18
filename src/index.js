/**
 * 入口文件
 */
import React from 'react'
import ReactDom from 'react-dom'

import App from './App'
//将根组件的变迁渲染到index.html中
ReactDom.render(<App />, document.getElementById('root'))