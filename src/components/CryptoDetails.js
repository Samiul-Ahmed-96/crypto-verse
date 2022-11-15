import { Col, Typography } from 'antd';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';

const {Title , Text} = Typography;

const CryptoDetails = () => {
  const [timePeriod,setTimePeriod]=useState('7d')
  const {coinId} = useParams();
  const {data , isFetching} = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;


  console.log(cryptoDetails);

  return (
    <Col className='coin-detail-container'>
      <Col className='coin-heading-container'>
        <Title level={2} className="coin-name">
          {cryptoDetails?.name}  Price : {cryptoDetails?.price}
        </Title>
        <p>{cryptoDetails.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
      </Col>
    </Col>
  )
}

export default CryptoDetails