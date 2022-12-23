import { Avatar, Col, Collapse, Row, Spin, Typography } from "antd";
import millify from "millify";
import React from "react";

import { useGetExchangesQuery } from "../services/cryptoApi";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;

  return (
    <>
      {isFetching ? (
        <Spin />
      ) : (
        <Row>
          {exchangesList.map((exchange) => (
            <Col md={24}>
              <Collapse>
                <Panel
                  key={exchange.uuid}
                  showArrow={false}
                  header={
                    <Row key={exchange.uuid}>
                      <Col>
                        <Text>
                          <strong>{exchange.rank}</strong>
                        </Text>
                        <Avatar
                          className="exchange-image"
                          src={exchange.iconUrl}
                        />
                        <Text>
                          <strong>{exchange.name}</strong>
                        </Text>
                      </Col>
                    </Row>
                  }
                >
                  <Col md={6}></Col>

                  <Row>
                    <Col md={8}>Price : ${millify(exchange.price)}</Col>
                    <Col md={8}>
                      Number Of Markets : {millify(exchange.numberOfMarkets)}
                    </Col>
                    <Col md={8}>Btc Price : {millify(exchange.btcPrice)}%</Col>
                  </Row>
                </Panel>
              </Collapse>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Exchanges;
