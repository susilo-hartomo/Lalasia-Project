import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import brandImg from '@/images/lalasia_brand_img.svg';
import brandText from '@/images/lalasia_brand_text.svg';
import chartIcn from '@/icons/chart_ic.svg';
import userIcn from '@/icons/user_ic.svg';

import { navlist } from '../../constants';

export default function Navbar() {
	const renderBrand = () => (
		<div className='flex items-center'>
			<div className='mr-3'>
				<Image src={brandImg} alt='Lalasia Brand' width={42} height={42} />
			</div>
			<Image src={brandText} alt='Lalasia Brand' width={76} height={18.7} />
		</div>
	);

	const renderNavlink = () => {
		return (
			<nav className='flex'>
				{navlist.map((item, index) => (
					<Link href={item.route} key={index}>
						<a
							className={`paragraph par-1 ${
								index === 0 ? 'mr-[30px]' : index === navlist.length - 1 ? 'ml-[30px]' : `mx-[30px]`
							}`}>
							{item.path}
						</a>
					</Link>
				))}
			</nav>
		);
	};

	const renderAction = () => (
		<div className='flex items-center'>
			<Image src={chartIcn} alt='chart icon' width={30} height={30} />
			<div className='ml-6'>
				<Image src={userIcn} alt='user icon' width={30} height={30} />
			</div>
		</div>
	);

	return (
		<header className='border-b-2 border-solid border-light-white'>
			<div className='h-[120px] container mx-auto flex items-center justify-between'>
				{renderBrand()}
				{renderNavlink()}
				{renderAction()}
			</div>
		</header>
	);
}
