import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Col, Divider, Form, Image, Input, message, Row } from 'antd';

import { addUser, User } from '../features/userSlice';
import { useAppDispatch } from '../store';

const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onFinish = (values: User) => { //Login Controll
        const { name, password } = values

        if (name === 'user' && password === 'user') {
            dispatch(addUser(values))
            localStorage.setItem('user', 'user')
            navigate('/home/all')
            message.success('Logged as User')
        } else if (name === 'admin' && password === 'admin') {
            dispatch(addUser(values))
            localStorage.setItem('user', 'admin')
            navigate('/admin/all')
            message.success('Logged as Admin')
        }
        else {
            message.warning('Pls Input correct value')
        }
    };

    const onFinishFailed = (errorInfo: any) => { // Login error warning
        message.warning(errorInfo)
    };

    return (
        <Row style={{ height: '100vh' }} justify='center' align='middle' >
            <Divider orientation='center' style={{ fontFamily: 'sofia' }}> Welcome to Azza Cake House</Divider>
            <Col xs={18} sm={12} md={6} lg={6} >
                <Row justify='center'>
                    <Image style={{ borderRadius: '8px' }}
                        width={300}
                        src="https://azza.az/wp-content/uploads/2020/06/cakehouse1-min.png"
                    />
                </Row>
            </Col>
            <Col xs={18} sm={12} md={6} lg={6} >
                <Row justify='center'>
                    <Divider orientation='center'>Login:</Divider>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Row>
            </Col>
            <Divider></Divider>
        </Row>
    );
};

export default Login;
