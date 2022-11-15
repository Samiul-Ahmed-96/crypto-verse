import { Col, Row, Statistic, Typography } from "antd";
import React from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;

const Homepage = () => {

  const {data , isFetching} = useGetCryptosQuery();

  const totalCryptocurrencies = data?.data.stats.total;
  const totalExchanges = data?.data.stats.totalExchanges;
  const totalMarketCap = data?.data.stats.totalMarketCap;
  const total24hVolume = data?.data.stats.total24hVolume;
  const totalCoins = data?.data.stats.totalCoins;
  const totalMarkets = data?.data.stats.totalMarkets;

  console.log(totalCryptocurrencies);

  return (
    <>
      <Title level={2}>Global Crypto Stats</Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={totalCryptocurrencies}></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={totalExchanges}></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={totalMarketCap}></Statistic>
        </Col>

        <Col span={12}>
          <Statistic title="Total 24h Volume" value={total24hVolume}></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={totalMarkets}></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Coins" value={totalCoins}></Statistic>
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
