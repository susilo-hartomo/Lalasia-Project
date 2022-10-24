import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ArticleSlickCard from '../card/ArticleSlickCard'
import Image from 'next/image'
import { articleNextArrow, articlePrevArrow } from '../../assets/icons'
import { articles } from '../../constants/articles'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} z-20`}
      style={{
        ...style,
        right: 0,
        left: 'unset',
        top: 'unset',
        width: 72,
        height: 72,
        bottom: -88,
      }}
      onClick={onClick}
    >
      <Image
        src={articleNextArrow}
        width={72}
        height={72}
        layout="responsive"
      />
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
        right: 72,
        left: 'unset',
        top: 'unset',
        width: 72,
        height: 72,
        bottom: -88,
        boxShadow: '0px 4px 100px rgba(175, 173, 181, 0.1)',
      }}
      onClick={onClick}
    >
      <Image
        src={articlePrevArrow}
        width={72}
        height={72}
        layout="responsive"
      />
    </div>
  )
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
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
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
    }

    return (
      <Slider {...settings} className="">
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
    )
  }
}
