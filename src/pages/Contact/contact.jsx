import React, { Component } from 'react';
import {Input,Form,Button,Modal } from 'antd';
import banner from './images/banner_contact.jpg'
import  './contact.less'

import { reqGetUser,reqAddProduct } from "../../api";

const { TextArea } = Input;
class Contact extends Component {
    state={
        adminInfo:[]
    }

    success= ()=> {
        Modal.success({
            content: 'Message logged successfully! Please wait for the staff to contact you',
        });
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
                <div className="adminInfo" key="key">
                    <h1>Get In Touch</h1>
                    <Button type="primary" shape="round">{item.relname}</Button>
                    <div>
                        <p>
                            <span>Address :</span>
                            <span>{item.adress}</span>
                        </p>
                        <p>
                            <span>Ask Us Some Thing :</span>
                            <span>{item.email}</span>
                        </p>
                        <p>
                            <span>Call Us:</span>
                            <span>+86 {item.phone}(Skype ID/Facebook ID)</span>
                        </p>
                    </div>
                </div>
            )
        })
    }

    handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async(err, values) => {
      if (!err) {
        const {CustomerName,CustomerEamil,CustomerPhone,CustomerMessage}=values;
        const customer={CustomerName,CustomerEamil,CustomerPhone,CustomerMessage};
        const result=await reqAddProduct(customer);
        if(result.status===200){
            this.props.form.resetFields();
            this.success();
        }
      }
    });
  };
    render() {
        const form=this.props.form
        const { getFieldDecorator } =form;
        const adminIfo=this.state.adminInfo
        return (<div className="contact">
            <img src={banner} alt="banner"/>
            <div className="content">
                 {this.showInfo(adminIfo)}
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item> <h1>Send Us Message</h1> </Form.Item>
                                <Form.Item>
                                   {getFieldDecorator('CustomerName')(
                                        <Input placeholder="Your Name"/>
                                   )}
                                </Form.Item>
                                <Form.Item>
                                   {getFieldDecorator('CustomerEamil',{
                                        rules: [
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                        },
                                        ],
                                    })(
                                        <Input placeholder="Your Email"/>
                                   )}
                                </Form.Item>
                                <Form.Item >
                                   {getFieldDecorator('CustomerPhone',{
                                        rules: [
                                            { required: true, message: 'Please input your phone number!' },
                                            // { pattern:/^[1]+[3,5,8]+\d{9}$/, message: 'The phone number format is incorrect!'}
                                        ],
                                     })(
                                        <Input placeholder="Your Phone"/>
                                   )}
                                </Form.Item>
                                <Form.Item>
                                   {getFieldDecorator('CustomerMessage')(
                                        <TextArea rows={4} placeholder="Leave your message"/>
                                   )}
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button" >SUBMIT NOW</Button>
                                </Form.Item>
                            </Form>
            </div>
        </div>);
    }
}

const WrapContact=Form.create()(Contact)
export default WrapContact;