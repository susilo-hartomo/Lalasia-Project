import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '../card/ProductCard';
import { products } from '../../constants/products';
import Image from 'next/image';
import { leftSlide, rightSlide } from '../../assets/icons';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    console.log("🚀 ~ file: ProductSlick.js ~ line 11 ~ SampleNextArrow ~ className", className);
    return (
        <div
            className={`${className} z-20`}
            style={{ ...style, display: "block", right: 25, width: 52, height: 52, top: 180 }}
            onClick={onClick}
        >
            <Image src={rightSlide} width={52} height={52} />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;

    return (
        <div
            className={`${className} z-20`}
            style={{ ...style, display: "block", left: 25, width: 52, height: 52, top: 180 }}
            onClick={onClick}
        >
            <Image src={leftSlide} width={52} height={52} />
        </div>
    );
}

export default class ProductSlick extends Component {
    render() {
        const settings = {
            className: "center variable-width slider overflow-hidden",
            centerMode: true,
            centerPadding: "265px",
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <Slider {...settings} className='my-12'>
                {products.map((item, i) => (
                    <ProductCard key={i} img={item.img} category={item.category} name={item.name} desc={item.desc} price={item.price} />
                ))}
            </Slider>
        );
    }
}
