import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        </div>
    )
}

export default LoadingPage;