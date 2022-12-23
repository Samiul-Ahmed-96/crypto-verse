import { Col } from "antd";
import React from "react";
import Slider from "react-slick";
import { useGetCryptosQuery } from "../services/cryptoApi";

const Banner = () => {
  const count = 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);

  const coins = cryptoList?.data?.coins;

  console.log(coins);

  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 4,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Col>
      {!isFetching && (
        <Slider {...settings}>
          {coins.map((coin) => (
            <div className="image-container">
              <div className="coin-image">
                <img width={100} src={coin?.iconUrl} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      )}
    </Col>
  );
};

export default Banner;
