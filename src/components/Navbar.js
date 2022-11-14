import { Avatar, Button, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
// import {HomeOutlined,MoneyCollectOutlined,BulbOutlined,MenuOutlined} from '@ant-design/icons';
import icon from '../images/blockchain.png';


const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className="logo-container">
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className="logo">
                <Link to="/">Crypto Verse</Link>
            </Typography.Title>
            <Button className='menu-control-container'></Button>
        </div>
    </div>
  )
}

export default Navbar