import { Avatar, Card, Col, Row, Typography } from 'antd';
import moment from 'moment';
import React from 'react';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
const { Title , Text } = Typography;


const demoImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVfHzQIlBxzi_temazZnbQFkHSPhFbpvbCtp1gvCv2w_BRy84f7Dxslsf04-1DJvXlFh8&usqp=CAU';

const News = ({simplified}) => {

  const {data : cryptoNews } = useGetCryptoNewsQuery({
    newsCategory:'Cryptocurrency' , count : simplified ? 6 : 12
  }) 

  console.log(cryptoNews?.value);

  if(!cryptoNews?.value) return 'Loading...'

  return (
    <>
    {
      !simplified && (
        
        <Title level={2}>All Crypto News</Title>
      )
    }
    

    <Row gutter={[24, 24]}>
    {cryptoNews.value.map((news, i) => (
      <Col xs={24} sm={12} lg={8} key={i}>
        <Card hoverable className="news-card">
          <a href={news.url} target="_blank" rel="noreferrer">
            <div className="news-image-container">
              <Title className="news-title" level={4}>{news.name}</Title>
              <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
            </div>
            <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
            <div className="provider-container">
              <div className='provider-details'>
                <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                <Text className="provider-name">{news.provider[0]?.name}</Text>
              </div>
              <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
            </div>
          </a>
        </Card>
      </Col>
    ))}
  </Row>
    </>
  )
}

export default News