import React, { Component } from 'react'
import { Form, Icon, Input, Button,} from 'antd';


import './login.less'
import logo from './images/logo.png'

class Login extends Component {

    
    handleSubmit = (event)=> {
       event.preventDefault();

       this.props.form.validateFields((err, values) => {
           if(!err){
               console.log("submit ajax request", values)
           } else {
               console.log("Validation failed！")
           }
       })
    }


    render() {
        const form = this.props.form
        const { getFieldDecorator } = form

        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt={logo} />
                    <h1>React Backend</h1>
                </header>
                <section className="login-content">
                    <h2>Login</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {
                                getFieldDecorator('username', { 
                                    rules:[
                                        {required: true, message:"Please enter username!"},
                                        {min: 4, message:"Username must be at least 4 characters!"},
                                        {max: 12, message: "Username must not be longer than 12 characters!"},
                                        {pattern:/^[a-zA-Z0-9_]+$/, message: "Username must only contain letter, number and _ !"}
                                    ]

                                })(
                                    <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                    />
                                )
                            }
                           
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                )
                            }
                            
                        </Form.Item>
                        <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        {/* Or <a href="/">register now!</a> */}
                        </Form.Item>
                    </Form>
                </section>
            </div>
        );
    }
}

const WrapLogin = Form.create()(Login)

export default WrapLogin;
