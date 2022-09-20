import React, { useRef } from 'react';
import Image from 'next/image';

function BenefitsCard({ img, name, desc }) {
	return (
		<div className='w-full lg:w-fit mt-5 lg:mt-0'>
			<div
				className='w-full lg:w-[394px] h-[285px] px-6 py-6'
				style={{ boxShadow: '0px 4px 100px rgba(175, 173, 181, 0.1)' }}>
				<Image src={img} alt='iconBenefit1' />
				<h3 className='font-bold mt-6 mb-5 text-title-1'>{name}</h3>
				<p className='text-paragraph-1'>{desc}</p>
			</div>
		</div>
	);
}

export default BenefitsCard;
