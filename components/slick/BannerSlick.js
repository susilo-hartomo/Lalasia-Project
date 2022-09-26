import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { products } from "../../constants/productPage";
import { leftSlide, rightSlide } from "../../assets/icons";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-20`}
      style={{
        ...style,
        display: "block",
        right: 25,
        width: 52,
        height: 52,
        top: "50%",
      }}
      onClick={onClick}
    >
      <Image src={rightSlide} width={52} height={52} alt="next arrow" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-20`}
      style={{
        ...style,
        display: "block",
        left: 25,
        width: 52,
        height: 52,
        top: "50%",
      }}
      onClick={onClick}
    >
      <Image src={leftSlide} width={52} height={52} alt="prev arrow" />
    </div>
  );
}

export default class ProductSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            nextArrow: null,
            prevArrow: null,
          },
        },
      ],
    };
    return (
      <Slider {...settings}>
        {products.map((item, i) => (
        <div>
          <div key={i} className="w-full h-[200px] lg:h-[550px] relative">
            <Image
              src={item.img}
              alt={item.title}
              layout="fill"
              objectFit="fill"
            />
            <div className="absolute top-1/2 -mt-11 left-32">
            <h2 className="heading text-white">{item.title}</h2>
            <h3 className="mt-5 heading w-[416px] text-2xl text-white">{item.descriotion}</h3>
            </div>
          </div>
        </div>
        ))}
      </Slider>
    );
  }
}
