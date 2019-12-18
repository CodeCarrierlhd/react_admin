import React, { Component } from 'react';
import {Button } from 'antd';
import banner from './images/banner_pro.jpg'
import  './product_info.less'
class ProductInfo extends Component {
    render() {
         const pro_info=this.props.location.state
        return ( <div className="pro">
            <img src={banner} alt="banner"/>
            <div className="pro_content">
                <div className="pro_header">
                    <img src={pro_info.product_img} alt=""/>
                    <div className="pro_title">
                        <h3>{pro_info.product_title}</h3>
                        <p>{pro_info.product_subTitle}</p>
                        <Button type="link" onClick={()=>{this.props.history.push('/contact')}}>Enquiry</Button>
                    </div>
                </div>
                <div className="pro_info">
                <h2>Product Details</h2>
                <p>{pro_info.product_info}</p>
                </div>
            </div>
        </div> );
    }
}

export default ProductInfo;