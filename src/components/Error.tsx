import { Col, Row } from 'antd';
import React from 'react';

import NavBar from './Navbar';

const Error: React.FC = () => {
    return (
        <div className='container'>
            <NavBar />
            <Row align='middle' justify='center'>
                <Col span={12}>
                    <h1>Error 404 </h1>
                    <img src="https://preview.redd.it/1te8oj66brc81.jpg?width=640&crop=smart&auto=webp&s=7ce96c1f6fda6dc3ae0c1a769bf373009a6e463d" alt="error" />
                </Col>
            </Row>

        </div>
    )
}

export default Error
