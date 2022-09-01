import { FacebookOutlined, InstagramOutlined, ShoppingOutlined, TwitterOutlined, UserOutlined, BgColorsOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store';

const NavBar = () => {
    const navigate = useNavigate();
    const [color, setColor] = useState('');
    const body = document.querySelector('body') as HTMLElement;

    const ChooseColor = (e: any) => { // Set Body Color
        setColor(e.target.value);
        body.style.backgroundColor = color
        e.preventDefault();
    }

    const orderCount = useAppSelector(state => state.orders.orderTotalQuantity)

    const productData = [
        {
            label: "Home",
            to: '/home/all'
        },
        {
            label: "Pasta",
            to: '/pasta/pasta'
        }, {
            label: "Cookies",
            to: '/cookies/cookies'
        }, {
            label: "National",
            to: '/national/national'
        }, {
            label: "Ekler",
            to: '/ekler/ekler'
        },
    ];
    return (
        <div className="Filter">
            <ul id="Navbar">
                {
                    productData.map((item) => (<li key={item.label}><Link to={item.to}>{item.label}</Link></li>))
                }

                <li><Link to='/' onClick={() => { localStorage.clear(); message.warn('logged out') }}> {localStorage.getItem('user' || 'admin') ? 'Log Out' : 'Log In'}<UserOutlined /></Link></li>
            </ul>
            <div className="fixedDiv">
                <div className="color">
                    <label htmlFor="colorChoose"><BgColorsOutlined />Color</label>
                    <input id='colorChoose' className='color btn btn-warning' type="color" value='#50213A' onChange={(e) => ChooseColor(e)} />
                </div>

                <div className='card' onClick={() => navigate('/orders')}>
                    {orderCount} <br /><ShoppingOutlined />
                </div>
            </div>
            <div className="social">
                <ul>
                    <li><span>@azza_cake_house</span><TwitterOutlined /></li>
                    <li><span>Azza cake house</span><FacebookOutlined /></li>
                    <li><span>@azza_cake_</span><InstagramOutlined /></li>
                </ul>
            </div>
        </div >
    );
};
export default NavBar;
