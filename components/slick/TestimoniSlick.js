import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonial } from 'constants/testimonial';
import TestimoniCard from '../card/TestimoniCard';

export default class TestimoniSlick extends Component {
	render() {
		const settings = {
			className: 'center variable-width slider overflow-hidden',
			centerMode: true,
			centerPadding: '300px',
			infinite: true,
			speed: 5000,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			cssEase: "linear"
		};
		return (
			<Slider {...settings} className='my-12'>
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
		);
	}
}
