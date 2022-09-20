import React, { useRef } from 'react';
import Image from 'next/image';

function TestimoniCard({ name, quote, rate, img, iconQuote, iconStar }) {
	return (
		<div className='w-[545px] h-[256px]' style={{ boxShadow: '0px 4px 100px rgba(175, 173, 181, 0.1)' }}>
			<div>
				<Image src={iconQuote} alt={'iconQuote'} />
			</div>
			<p>{quote}</p>
			<Image src={img} alt={'acountImage'} />
			<h4>{name}</h4>
			<Image src={iconStar} alt={'star'} />
			<h5>{rate}</h5>
		</div>
	);
}

export default TestimoniCard;
