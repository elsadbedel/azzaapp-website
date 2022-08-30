import React from 'react';
import { useParams } from 'react-router-dom';

import NavBar from './Navbar';
import SingleProduct from './SingleProduct';

const Ekler: React.FC = () => {
    const param = useParams()
    return (
        <div className="container">
            <NavBar />
            <h1>Eklerlər</h1>
            <SingleProduct name={param.filterKey} />
        </div >
    )
}

export default Ekler;