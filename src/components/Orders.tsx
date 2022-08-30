import React from 'react';

import { Button, Col, Row } from 'antd';

import { addOrder as increaseOrder, decreaseOrderQuantity, removeAllOrder, removeOrder } from '../features/addToCard';
import { useAppDispatch, useAppSelector } from '../store';
import NavBar from './Navbar';

const Orders: React.FC = () => {
    const { orderItems } = useAppSelector(state => state.orders);
    const { orderTotalAmount } = useAppSelector(state => state.orders);

    const dispatch = useAppDispatch();
    return (
        <div className='container'>
            <NavBar />
            {orderItems.length !== 0 ? orderItems.map((item, index) =>
                <Row key={index} align='middle' justify='center' className="OrderItem" >
                    <Col span={3} ><img style={{ width: '5vw', height: '10vh', borderRadius: '10px', }} src={item.image} alt={item.name} /></Col>
                    <Col style={{  }} span={6} >
                        <h3 style={{marginRight: '10px', display: 'inline-block' }}>{item.name}</h3>
                        <Button onClick={() => dispatch(removeOrder(item.id))} type='ghost'>Sil</Button>
                    </Col>
                    <Col span={6}>
                        {item.orderQuantity >= 1 ? <Button type='ghost' onClick={() => dispatch(decreaseOrderQuantity(item.id))}>Azalt -</Button> : null}
                        <span style={{marginRight: '10px',marginLeft:'10px'}}>Sifaris sayi {item.orderQuantity}</span>
                        <Button type='ghost' onClick={() => dispatch(increaseOrder(item))}>Artır +</Button>
                    </Col>
                    <Col span={6}>{item.price * item.orderQuantity} AZN</Col>
                </Row>)

                : <h1>Hazırda Səbətiniz boşdur {`:)`}</h1>}
            <Row align='middle' justify='end'><Col span={8}>Total amount: {orderTotalAmount}</Col></Row>

            {orderItems.length !== 0 ? <Row className="OrderItem" justify='end'><Col span={8}><Button onClick={() => dispatch(removeAllOrder('removeAll'))} type='ghost'>Bütün səbətinizi boşaldın</Button></Col></Row> : null}
        </div>
    )
}

export default Orders
