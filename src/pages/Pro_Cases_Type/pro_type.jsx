import React, { Component } from 'react';
import './pro_type.less'
import banner from './images/banner_case.jpg'
class ProCaseType extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const pro_type=this.props.location.state
        return (<div>
            <div>
                <img src={banner} alt="banner"/>
            </div>
            <div className="container">
                <h2>{pro_type.type_name}</h2>
                <div className="main">
                    <img src={pro_type.main_img} alt="实物图"/>
                    <p>{pro_type.m_title}</p>
                </div>
                 <h3>Classic Case:</h3>
                 <div className="main">
                    <img src={pro_type.sub_img} alt="实物图"/>
                    <p>{pro_type.sub_title}</p>
                </div>
                <div style={{backgroundSize:'cover'}}>
                    <img src={pro_type.all_img} alt="banner"/>
                </div>
            </div>

        </div>);
    }
}

export default ProCaseType;