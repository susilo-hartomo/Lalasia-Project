import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { dataBanner } from '../../constants/Services'
import { leftSlide, rightSlide } from '../../assets/icons'

function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={`${className} z-20`}
            style={{
                ...style,
                display: 'block',
                right: 25,
                width: 52,
                height: 52,
                top: '50%',
            }}
            onClick={onClick}
        >
            <Image src={rightSlide} width={52} height={52} alt="next arrow" />
        </div>
    )
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={`${className} z-20`}
            style={{
                ...style,
                display: 'block',
                left: 25,
                width: 52,
                height: 52,
                top: '50%',
            }}
            onClick={onClick}
        >
            <Image src={leftSlide} width={52} height={52} alt="prev arrow" />
        </div>
    )
}

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            dotsClass: 'slick-dots !bottom-32',
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        nextArrow: null,
                        prevArrow: null,
                    },
                },
            ],
        }
        return (
            <Slider {...settings}>
                {dataBanner.map((item, i) => (
                    <div
                        key={i}
                        className="w-full h-[200px] lg:h-[550px] relative"
                    >
                        <Image
                            src={item.img}
                            alt={item.title}
                            layout="fill"
                            objectFit="fill"
                        />
                    </div>
                ))}
            </Slider>
        )
    }
}
