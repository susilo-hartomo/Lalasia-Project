import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { brandImg, brandText } from '../../assets/images';

import { followUsLinkList, productLinkList, servicesLinkList } from '../../constants';

const ListFeature = ({ title, listOfFeatures }) => {
	return (
		<div>
			<h4 className='heading mb-6'>{title}</h4>

			{listOfFeatures.map((item, index) => (
				<Link key={index} href={item.route}>
					<a data-aos-delay={`${index * 20 + 140}`} data-aos-duration='500' data-aos-easing='ease-in-out'>
						<p className='paragraph mb-3 text-paragraph-1' data-aos='fade-left'>
							{item.path}
						</p>
					</a>
				</Link>
			))}
		</div>
	);
};

export default function Footer() {
	const renderBrand = () => (
		<Link href='/'>
			<a>
				<div className='flex items-center'>
					<div className='mr-3'>
						<Image src={brandImg} alt='Lalasia Brand' width={42} height={42} />
					</div>
					<Image src={brandText} alt='Lalasia Brand' width={76} height={18.7} />
				</div>
			</a>
		</Link>
	);

	return (
		<footer className='my-20 px-8 lg:px-0'>
			<div className='container lg:flex mx-auto lg:pt-24 pt-5 border-t-2 border-ligh-white'>
				<div
					className='w-3/4'
					data-aos='fade-up'
					data-aos-delay='20'
					data-aos-duration='500'
					data-aos-easing='ease-in-out'>
					{renderBrand()}
					<p
						className='paragraph lg:w-1/2 mt-9 text-paragraph-1'
						data-aos='fade-up'
						data-aos-delay='40'
						data-aos-duration='700'
						data-aos-easing='ease-in-out'>
						Lalasia is digital agency that help you make better experience iaculis cras in.
					</p>
				</div>
				<div className='lg:w-1/2 pt-8 lg:pt-0 flex justify-between'>
					<div data-aos='fade-up' data-aos-delay='60' data-aos-duration='500' data-aos-easing='ease-in-out'>
						<ListFeature title='Product' listOfFeatures={productLinkList} />
					</div>
					<div data-aos='fade-up' data-aos-delay='60' data-aos-duration='500' data-aos-easing='ease-in-out'>
						<ListFeature title='Services' listOfFeatures={servicesLinkList} />
					</div>
					<div data-aos='fade-up' data-aos-delay='60' data-aos-duration='500' data-aos-easing='ease-in-out'>
						<ListFeature title='Follow Us' listOfFeatures={followUsLinkList} />
					</div>
				</div>
			</div>
		</footer>
	);
}
