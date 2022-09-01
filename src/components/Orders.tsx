import React from 'react';

import { Button, Col, Image, Row } from 'antd';

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
                <Row key={index} className="OrderItem" >
                    <div className="box">
                        <Image style={{ width: '10vw', height: '10vh', borderRadius: '10px', }} src={item.image} alt={item.name} />
                        <h3 style={{ marginRight: '10px', display: 'inline-block' }}>{item.name}</h3>
                        <Button onClick={() => dispatch(removeOrder(item.id))} type='ghost'>Sil</Button>
                    </div>
                    <div className="box">
                        {item.orderQuantity >= 1 ? <Button type='ghost' onClick={() => dispatch(decreaseOrderQuantity(item.id))}>Azalt -</Button> : null}
                        <span style={{ marginRight: '10px', marginLeft: '10px' }}>Sifaris sayi {item.orderQuantity}</span>
                        <Button type='ghost' onClick={() => dispatch(increaseOrder(item))}>Artır +</Button>
                    </div>
                    <div className="box">
                        {item.price * item.orderQuantity} AZN
                    </div>
                </Row >
            )
                : <h1>Hazırda Səbətiniz boşdur {`:)`}</h1>}

            {orderItems.length !== 0 ? <Row justify='end' align='middle'><Col lg={6}>Total amount: {orderTotalAmount}</Col><Col lg={6}><Button onClick={() => dispatch(removeAllOrder('removeAll'))} type='ghost'>Bütün səbətinizi boşaldın</Button></Col></Row> : null}
        </div >
    )
}

export default Orders
