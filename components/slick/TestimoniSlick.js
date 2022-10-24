import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { testimonial } from 'constants/testimonial'
import TestimoniCard from '../card/TestimoniCard'

export default class TestimoniSlick extends Component {
  render() {
    const settings = {
      className: 'center variable-width slider overflow-hidden',
      centerMode: true,
      centerPadding: '360px',
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
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
      <Slider {...settings} className="my-12">
        {testimonial.map((item, i) => (
          <TestimoniCard
            key={i}
            iconQute={item.iconQute}
            quote={item.quote}
            img={item.img}
            name={item.name}
            iconStar={item.iocnStar}
            rate={item.rate}
          />
        ))}
      </Slider>
    )
  }
}
