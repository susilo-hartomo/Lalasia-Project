import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArticleSlickCard from '../card/ArticleSlickCard';
import Image from 'next/image';
import { articleNextArrow, articlePrevArrow } from '../../assets/icons';
import { articles } from '../../constants/articles';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} z-20`}
            style={{ ...style, display: 'block', right: 90, width: 252, height: 52, top: 505 }}
            onClick={onClick}>
            <div className='w-full'>
                <Image src={articleNextArrow} />
            </div>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} z-20`}
            style={{ ...style, display: 'block', left: 360, width: 252, height: 52, top: 495 }}
            onClick={onClick}>
            <div className='w-full'>
                <Image src={articlePrevArrow} />
            </div>
        </div>
    );
}

export default class ArticlesSlick extends Component {
    render() {
        const settings = {
            className: 'center variable-width slider overflow-hidden',
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
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
                        centerPadding: '10px',
                        nextArrow: null,
                        prevArrow: null,
                    },
                },
            ],
        };

        return (
            <Slider {...settings} className='my-12'>
                {articles.map((item, i) => (
                    <ArticleSlickCard
                        key={i}
                        img={item.img}
                        category={item.category}
                        title={item.title}
                        prefix={item.prefix}
                    />
                ))}
            </Slider>
        );
    }
}
