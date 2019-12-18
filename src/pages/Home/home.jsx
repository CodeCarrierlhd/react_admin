import React, { Component } from 'react';

import { Link } from "react-router-dom";
import { reqGetAllProduct,reqGetAllProductCases,reqGetAllNews,reqAddProduct } from "../../api";
import { Icon,Card,Row, Col,Divider,Input,Form,Button,Modal } from 'antd';
import "./home.less";
import bg from './images/bg.jpg'
import icon from "./images/icon.png";
import product from './images/product.png'
import concat from './images/concat.jpg'

const { Meta } = Card;
const { TextArea } = Input;
class Home extends Component {

    state={
        products:[],
        productsCases:[],
        news:[]
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
        const product_list=await reqGetAllProduct();
        const productCases_list=await reqGetAllProductCases();
        const news_list=await reqGetAllNews();
        this.setState({
            products:product_list.data,
            productsCases:productCases_list.data,
            news:news_list.data
        })
    }
    getPro=(pro_list)=>{
         return pro_list.map((item,key)=>{
            return (
                <div key={key} className="product_card">
                    <Card hoverable style={{ width:220 }} cover={<img alt="example"  src={item.product_img}  data-index={item.id} />} onClick={()=>{this.props.history.push('/productInfo',item)}}>
                        <Meta title={item.product_title} />
                    </Card>
                </div>

            )
        })
    }

    getCases=(cases_list)=>{
         return cases_list.map((item,key)=>{
            return (
                <Col span={8} key={key}>
                    <div onClick={()=>{this.props.history.push('/pro_type',item)}}>
                        <div className="pro_case" style={{backgroundImage:`url(${item.main_img})`}}>
                            <p>
                                {item.title}
                            </p>
                        </div>
                        <p style={{textAlign:'center',font:'italic bold 20px Georgia,serif',color:'black'}}>{item.type_name}</p>
                    </div>
                </Col>
            )
        })
    }

    getNews=(news_list)=>{
         return news_list.map((item,key)=>{
            return (
                <div key={key}>
                    <div className="news"  onClick={()=>{this.props.history.push('/news',item)}}>
                        <i>·</i>
                        <span>{item.title}</span>
                        <span style={{float:'right'}}>{item.n_date.slice(0,10)}</span>
                    </div>
                    <Divider dashed className="line"/>
                </div>
            )
        })
    }
    handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async(err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
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
        const {products,productsCases,news}=this.state
        const form=this.props.form
         const { getFieldDecorator } =form;
        return (<div className="home_content">
                <img src={bg} alt="bg" />
                <div className="pro_img">
                    <img src={product} alt="bg" />
                </div>
                <div className="pro_info">
                    <p>Advance Energy (Shenzhen) Co., Ltd. is a professional manufacturer specializing in the development and production of lithium-ion rechargeable batteries and power supply systems. Its founder has more than 12 years of industry experience in the domestic battery industry, focusing on the application and supply of lithium ion, lithium iron phosphate (LiFePO4), lithium titanate (Li-Titanate) batteries along with global technical support.
The company's main products are the application of rechargeable lithium batteries and the development of cascade batteries. Mainly provide customized battery packs, power supply, power system and other related value-added services.Our products have passed IEC, CE, BIS certification and are widely used in solar energy storage system, UPS, communication base station energy storage, low-speed electric vehicles (such as electric tricycles, electric motorcycles, electric bicycles, golf carts), yachts, fishing boats, outdoor camping power supply, auxiliary power supply of household car/car, etc. With years of design and development experience, as well as good quality control system, our company provides customers with the best battery energy storage solutions.
We are wholesale battery manufacture, support OEM&ODM, welcome to try samples, please note not support retail business.</p>
            </div>
            <div className="pro_path">
                     <div className="pro_list_header">
                        <span>
                            <img src={icon} alt="icon"/>
                            <span>Main Products</span>
                        </span>
                        <Link to='/product/product_detail' >More <Icon type="double-right"/></Link>
                    </div>
                    <div className="pro_list">
                        {this.getPro(products)}
                    </div>
                    <div className="case_list_header">
                        <span>
                            <img src={icon} alt="icon"/>
                            <span>Classic Case</span>
                        </span>
                        <Link to='/product_cases/product_cases' >More <Icon type="double-right"/></Link>
                    </div>
                    <Row>
                        {this.getCases(productsCases)}
                    </Row>
                    <div className="pro_list_header">
                        <span>
                            <img src={icon} alt="icon"/>
                            <span>Company dynamics</span>
                        </span>
                        <Link to='/news/news' >More <Icon type="double-right"/></Link>
                    </div>
            </div>
            <div className="company_img">
                    <div className="news_content">
                        {this.getNews(news)}
                    </div>
            </div>
            <div className="concat">
                    <div className="case_list_header">
                        <span>
                            <img src={icon} alt="icon"/>
                            <span>Cantact Us</span>
                        </span>
                        <Link to='/concat/concat' >More <Icon type="double-right"/></Link>
                    </div>
                    <div className="concat_form">
                        <img src={concat} alt="Concat Us"/>
                        <div className="c_form">
                            <h2>Send Us Message</h2>
                             <Form onSubmit={this.handleSubmit} className="login-form">
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
                    </div>
            </div>
        </div>);
    }

}

const WrapCustomer=Form.create()(Home)
export default WrapCustomer;