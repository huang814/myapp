import React from 'react'
import './login.css'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


function Login(){
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };
    return(
        <div id="login">
            <header>
                <h2>商品管理系统</h2>
            </header>
            <div id="login_div">
                <h2>用户登录</h2>
                <div id="login_form">
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        >
                        <Form.Item
                        name="username"
                        rules={[
                            { required: true, 
                              message: 'Please input your Username!',
                              max:10,
                              min:5,
                              whitespace:true
                        }
                            
                        ]}
                        >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                        name="password"
                        rules={[{ required: true,
                                  message: 'Please input your Password!',
                                  max:10,
                                  min:6, 
                                  whitespace:true
                                }]}
                        >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                        </Form.Item>
                        <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login;