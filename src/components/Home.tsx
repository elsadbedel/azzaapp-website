import React from 'react';
import { useParams } from 'react-router-dom';

import NavBar from './Navbar';
import SingleProduct from './SingleProduct';

const Home: React.FC = () => {
    const param = useParams();
    return (
        <div className="container">
            <NavBar />
            <h1>Ana Səhifə</h1>
            <SingleProduct name={param.filterKey} />
        </div >
    )
}

export default Home;