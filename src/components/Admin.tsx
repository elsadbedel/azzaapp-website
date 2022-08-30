
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { Button, Col, Form, Input, InputNumber, message, Row, Select } from 'antd';//Ant Design

import { addProduct, Product } from '../features/ProductSlice'; //Actions
import { useAppDispatch } from "../store";
import SingleProduct from './SingleProduct';
import NavBar from "./Navbar";
import RenderIf from "./RenderIf";
import { v4 } from "uuid";

const Admin: React.FC = () => {
    const param = useParams()
    const { Option } = Select;
    const dispatch = useAppDispatch();
    const onFinish = ({ name, info, type, volume, price, image, orderQuantity = 1 }: Product) => {
        const newProduct = {
            id: v4(),
            name,
            type,
            info,
            volume,
            price,
            image,
            orderQuantity
        }
        console.log(newProduct);
        dispatch(addProduct(newProduct))
        message.success('New Product Added')
    }

    const [form] = Form.useForm();

    const [show, setShow] = useState(false);
    return (
        <div className="container">
            <NavBar />
            <h1>Admin</h1>
            <Button type="default" onClick={() => setShow(!show)}>Add Product</Button>
            <Row>
                <RenderIf condition={show}>
                    <Col span={12} >
                        <Form
                            form={form}
                            name="addProduct"
                            onFinish={onFinish}
                        >
                            <Form.Item
                                label="Product name"
                                name="name"
                                rules={[{ required: true, message: 'Please input product name' }]}
                            >
                                <Input placeholder="name" />
                            </Form.Item>

                            <Form.Item name='type' label="Product Type">
                                <Select placeholder="type">
                                    <Option value='ekler'>ekler</Option>
                                    <Option value='pasta'>pasta</Option>
                                    <Option value='national'>national</Option>
                                    <Option value='cookies'>cookies</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="Product info"
                                name="info"
                                rules={[{ required: true, message: 'Please input product info!' }]}
                            >
                                <Input placeholder="info" />
                            </Form.Item>

                            <Form.Item
                                label="Product Volume"
                                name="volume"
                                rules={[{ required: true, message: 'Please input product volume!' }]}
                            >
                                <Input placeholder="volume" />
                            </Form.Item>

                            <Form.Item label="Product Price" name="price">
                                <InputNumber placeholder="price" />
                            </Form.Item>

                            <Form.Item
                                label="Please input product image URL!"
                                name="image"
                                rules={[{ required: true, message: 'Please input product image "URL"!' }]}
                            >
                                <Input placeholder="image URL" />
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
                                <Button shape="round" type="primary" htmlType="submit">
                                    Add Product
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </RenderIf>
            </Row>
            <Row >
                <SingleProduct name={param.filterKey} />
            </Row>

        </div >
    )
}

export default Admin;