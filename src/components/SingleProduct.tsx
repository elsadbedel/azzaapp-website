import React, { useEffect, useState } from "react";
import { Params, useNavigate } from "react-router-dom";

import { Card, Col, Modal, Row, Tag, message } from 'antd';
import { DeleteOutlined, EditOutlined, FileAddFilled, FullscreenOutlined } from '@ant-design/icons'; // Icons

import { useAppDispatch, useAppSelector } from "../store";
import { Product, removeProduct } from "../features/ProductSlice"; // Product Actions
import { addOrder } from "../features/addToCard"; // Order Actions
import RenderIf from "./RenderIf"; // Custom render function

const SingleProduct: React.FC<Params<string>> = (type) => {
    const { Meta } = Card;
    const navigate = useNavigate()

    const { products } = useAppSelector(state => state.products) // Products
    const dispatch = useAppDispatch();

    const [id, setId] = useState(String);
    const detail = products.find(e => e.id === id); // single product

    const AddOrder = (item: Product) => { // ADD ORDER
        dispatch(addOrder(item))
        message.success('Product Added to card')
    }

    const DeleteProduct = (id: string) => { // ADD PRODUCT
        dispatch(removeProduct(id))
        message.success('Deleted')
    }

    const [isModalVisible, setIsModalVisible] = useState(false); // Detail Modal

    const showModal = () => { // Product Detail modal Show 
        setIsModalVisible(true);
    };

    const handleCancel = () => { // Product Detail modal Show cancel
        setIsModalVisible(false);
    };
    const [show, setShow] = useState(false);

    useEffect(() => { //User Controll
        if (localStorage.getItem('user') === 'admin') {
            setShow(!show)
        }
    }, [])

    return <Row gutter={{ xs: 5, sm: 5, md: 5, lg: 5 }}>
        {products.filter((e) => type.name === "all" || e.type === type.name).map(item =>
            <Col xs={24} sm={12} md={8} lg={6} style={{ margin: ' 5px 0px', justifyContent: 'center', display: 'flex' }} key={item.id}>
                <Card
                    hoverable
                    style={{ width: 250 }}
                    cover={<img style={{ height: 160 }} alt="example" src={item.image} />}
                    actions={[
                        <FullscreenOutlined id={item.id} onClick={e => { showModal(); setId(e.currentTarget.id) }} />,
                        <FileAddFilled onClick={() => AddOrder(item)} />,
                        <RenderIf condition={show}><DeleteOutlined onClick={() => DeleteProduct(item.id)} /></RenderIf>,
                        <RenderIf condition={show}> <EditOutlined onClick={() => navigate(`/edititem/${item.id}`)} /></RenderIf>
                    ]}
                >
                    <Meta title={item.type === 'pasta' ? 'Tortlar' : item.type === 'cookies' ? 'Peçenye' : item.type === 'ekler' ? 'Ekler' : item.type === 'national' ? 'Milli Şirniyyatlar' : null} description={item.name} />
                    <br />
                    <Tag color="green">{item.price} AZN</Tag>
                </Card>
            </Col>

        )}
        <>
            <Modal title={detail?.type} visible={isModalVisible} footer={null} onCancel={handleCancel}>
                <img style={{ width: "20vw", borderRadius: '20px' }} src={detail?.image} alt="img" />
                <p>{detail?.name}</p>
                <p>{detail?.info}</p>
                <Tag color="green">{detail?.price} AZN</Tag>
                <p></p>
            </Modal>
        </>
    </Row >
}
export default SingleProduct;

