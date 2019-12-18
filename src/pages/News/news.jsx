import React, { Component } from 'react';
import './news.less'
import bg from './images/banner_news.jpg'
class News extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const news=this.props.location.state;
        return (<div>
        <div><img src={bg} alt="banner"/></div>
        <div className="news_font">
            <h1>{news.title}</h1>
            <img src={news.t_img} alt="IMG"/>
            <p>{news.content}</p>
        </div>
        </div>);
    }
}

export default News;