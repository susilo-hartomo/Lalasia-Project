import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { dataBanner } from '../../constants/Services'
import { leftSlide, rightSlide } from '../../assets/icons'
import { ArticleTypes } from 'lib/types'

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

interface SimpleSliderTypes {
  imageList: ArticleTypes[]
  handleNext: (number) => void
}

const SimpleSlider = (props: SimpleSliderTypes) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (index) => {
      props.handleNext(index)
    },
    dotsClass: 'slick-dots md:!bottom-32 !bottom-16',
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
      {props.imageList.map((item, i) => (
        <div key={i} className="w-full h-[200px] lg:h-[550px] relative">
          <Image
            src={item.thumbnail}
            alt={item.title}
            layout="fill"
            objectFit="fill"
          />
        </div>
      ))}
    </Slider>
  )
}

export default SimpleSlider
