import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Col, Divider, Form, Input, message, Row } from 'antd';

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
        <Row style={{ height: '100vh' }} justify='space-evenly' align='middle' >
            <Col span={7}>
                <Divider orientation='left' style={{ fontFamily: 'sofia' }}> Welcome to Azza Cake House</Divider>
                <Row align='middle' justify='end'>
                    <Col span={24}><img style={{ width: '20rem', borderRadius: '15px' }} src="https://azza.az/wp-content/uploads/2020/06/cakehouse1-min.png" alt="Logo" /></Col>
                </Row>
                <Divider></Divider>
            </Col>
            <Col span={6}>
                <Divider orientation='left'>Login:</Divider>
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
                <Divider></Divider>
            </Col>
        </Row>
    );
};

export default Login;
