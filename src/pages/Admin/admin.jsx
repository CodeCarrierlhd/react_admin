/**
 * 后台管理路由组件
 */

import React, { Component } from 'react'
import { Redirect,Route,Switch,Link } from "react-router-dom";
import { Layout,Menu,Icon } from 'antd';
import './admin.less'
import logo from './images/logo.png'

import Home from '../Home/home'
import About from '../About/about'
import Contact from '../Contact/contact'
import News from '../News/news'
import Product from '../Product/product'
import ProductInfo from '../Product_info/product_info'
import Product_Cases from '../Product_Cases/product_cases'
import Pro_Type from '../Pro_Cases_Type/pro_type'
import News_List from '../News_List/news_list'

import { reqGetUser } from "../../api";

const { Header, Footer, Content } = Layout;

export default class Admin extends Component {

    state={
        adminInfo:[]
    }

    componentDidMount(){
        this.getList();
    }
    getList=async ()=>{
        const user_info=await reqGetUser();
        this.setState({
            adminInfo:user_info.data,
        })
    }

    showInfo=(user_info)=>{
         return user_info.map((item,key)=>{
            return (
                <div className="footerContent" key={key}>
                     <div>
                        <h2>ADVANCE ENERGY</h2>
                        <p>{item.company}</p>
                    </div>
                    <ul>
                        <li>
                            <Icon type="phone" />
                            <span>+86 {item.phone}(Skype ID/Facebook ID)</span>
                        </li>
                        <li>
                            <Icon type="medium" />
                            <span>{item.email}</span>
                        </li>
                        <li>
                            <Icon type="bank" />
                            <span>{item.adress}</span>
                        </li>
                    </ul>
                </div>
            )
        })
    }

    render() {
        const adminIfo=this.state.adminInfo
        return (<div className="admin">
            <Header className="header">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <h1>ADVANCE ENERGY</h1>
                </div>

                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <Link to='/home'>Home</Link>
                    </Menu.Item>

                    <Menu.Item key="product" >
                        <Link to='/product'>Product</Link>
                    </Menu.Item>

                    <Menu.Item key="cases" >
                         <Link to='/product_cases'>Project Cases</Link>
                    </Menu.Item>

                    <Menu.Item key="news" >
                     <Link to='/newsList'>News</Link>
                    </Menu.Item>

                    <Menu.Item key="about" >
                     <Link to='/about'>About</Link>
                    </Menu.Item>

                    <Menu.Item key="concat" >
                     <Link to='/contact'>Contact</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content className="content">
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/news' component={News}/>
                    <Route path='/newsList' component={News_List}/>
                    <Route path='/product' component={Product}/>
                    <Route path='/productInfo' component={ProductInfo}/>
                    <Route path='/product_cases' component={Product_Cases}/>
                    <Route path='/pro_type' component={Pro_Type}/>
                    <Redirect to='/home'/>
                </Switch>
            </Content>
            <Footer className="footer">
                {this.showInfo(adminIfo)}
            </Footer>
        </div>)

    }
}