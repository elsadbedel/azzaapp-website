import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button, Col, Divider, Form, Input, message, Row } from 'antd';

import { editProduct } from '../features/ProductSlice';
import { useAppDispatch, useAppSelector } from '../store';

const EditProduct: React.FC = () => {
    const param = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch();

    const product = useAppSelector(state => state.products.products.find(item => item.id === param.id))

    const [name, setName] = useState(product?.name);
    const [type, setType] = useState(product?.type);
    const [info, setInfo] = useState(product?.info);
    const [volume, setVolume] = useState(product?.volume);
    const [price, setPrice] = useState(product?.price);
    const [image, setImage] = useState(product?.image);
    const [orderQuantity, setQuantity] = useState(product?.orderQuantity);

    const editHandle = () => {
        const newproduct = {
            id: product?.id,
            name,
            type,
            info,
            volume,
            price,
            image,
            orderQuantity
        }

        dispatch(editProduct(newproduct))
        navigate('/admin/all')
        message.success('Product Success Updated')
    }

    return (
        <div className="container">
            {/* {param.id} */}
            <Row justify='center'>
                <Col span={12}>

                    <Form onFinish={editHandle} >
                        <Divider orientation="left">Product Name</Divider>
                        <Input name='nameProduct' placeholder="Product name" value={name} onChange={e => setName(e.target.value)} type="text" />
                        <Divider orientation="left">Product Type</Divider>
                        <Input name='typeProduct' placeholder="Product type" value={type} onChange={e => setType(e.target.value)} type="text" />
                        <Divider orientation="left">Product Info</Divider>
                        <Input name='infoProduct' placeholder="Product info" value={info} onChange={e => setInfo(e.target.value)} type="text" />
                        <Divider orientation="left">Product Image</Divider>
                        <Input name='imageProduct' placeholder="Product image" value={image} onChange={e => setImage(e.target.value)} type="text" />
                        <Divider orientation="left">Product Volume</Divider>
                        <Input name='volumeProduct' placeholder="Product volume" value={volume} onChange={e => setVolume(e.target.value)} type="text" />
                        <Divider orientation="left">Product Price</Divider>
                        <Input name='priceProduct' placeholder="Product price" value={price} onChange={e => setPrice(Number(e.target.value))} type="text" />
                        <Divider orientation="left">Product Quantity</Divider>
                        <Input name='quantityProduct' placeholder="Product orderQuantity" value={orderQuantity} onChange={e => setQuantity(Number(e.target.value))} type="text" />
                        <Button onClick={editHandle} shape="round" type="dashed" htmlType="submit">
                            Update Product
                        </Button>
                    </Form >

                </Col>
            </Row>
        </div>
    )
}

export default EditProduct
