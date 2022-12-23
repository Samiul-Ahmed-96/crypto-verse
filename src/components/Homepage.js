import { Col, Row, Statistic, Typography } from "antd";
import millify from "millify";
import React from "react";
import { Link } from "react-router-dom";
import { Cryptocurrencies, News } from "../components";

import { useGetCryptosQuery } from "../services/cryptoApi";
import Banner from "./Banner";
const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(12);

  const totalCryptocurrencies = data?.data.stats.total;
  const totalExchanges = data?.data.stats.totalExchanges;
  const totalMarketCap = data?.data.stats.totalMarketCap;
  const total24hVolume = data?.data.stats.total24hVolume;
  const totalCoins = data?.data.stats.totalCoins;
  const totalMarkets = data?.data.stats.totalMarkets;

  return (
    <>
      <Banner />
      
      <div className="global-stats-wrapper">
      <Title level={2}>Global Crypto Stats</Title>
        <Row gutter={[32, 32]}>
          <Col md={8} className="stats-item">
            <Statistic
              title="Total Cryptocurrencies"
              value={totalCryptocurrencies}
            ></Statistic>
          </Col>
          <Col md={8} className="stats-item">
            <Statistic
              title="Total Exchanges"
              value={millify(totalExchanges)}
            ></Statistic>
          </Col>
          <Col md={8} className="stats-item">
            <Statistic
              title="Total Market Cap"
              value={millify(totalMarketCap)}
            ></Statistic>
          </Col>

          <Col md={8} className="stats-item">
            <Statistic
              title="Total 24h Volume"
              value={millify(total24hVolume)}
            ></Statistic>
          </Col>
          <Col md={8} className="stats-item">
            <Statistic
              title="Total Markets"
              value={millify(totalMarkets)}
            ></Statistic>
          </Col>
          <Col md={8} className="stats-item">
            <Statistic
              title="Total Coins"
              value={millify(totalCoins)}
            ></Statistic>
          </Col>
        </Row>
      </div>
      <div className="cryptocurrencies-container">
        <div className="cryptocurrencies-heading">
          <Title level={2}>Top 12 Crypto Currencies In The World</Title>
          <Title level={4}>
            <Link to="/cryptocurrencies">Show More</Link>
          </Title>
        </div>
        <Cryptocurrencies simplified />
      </div>
      <div className="news-container">
        <div className="news-heading">
          <Title level={2}>Latest Crypto News</Title>
          <Title level={4}>
            <Link to="/news">Show More</Link>
          </Title>
        </div>
        <News simplified />
      </div>
    </>
  );
};

export default Homepage;
