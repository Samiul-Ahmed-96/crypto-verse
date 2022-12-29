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
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
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
