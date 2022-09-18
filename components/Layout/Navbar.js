import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { brandImg, brandText } from '../../assets/images';
import { humbergerIcn, cartIcn, userIcn } from '../../assets/icons';

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
		const router = useRouter();

		return (
			<nav className='flex h-full'>
				{navlist.map((item, index) => (
					<Link href={item.route} key={index}>
						<a
							className={`paragraph par-1 h-full leading-[7.5rem] ${
								item.route == router.pathname ? 'text-primary-1 border-b-4 border-primary-1' : null
							} ${index === 0 ? 'mr-[30px]' : index === navlist.length - 1 ? 'ml-[30px]' : `mx-[30px]`}`}>
							{item.path}
						</a>
					</Link>
				))}
			</nav>
		);
	};

	const renderAction = () => (
		<div>
			<div className='lg:hidden'>
				<Image src={humbergerIcn} alt='chart icon' width={30} height={30} />
			</div>
			<div className='lg:flex items-center hidden'>
				<Image src={cartIcn} alt='chart icon' width={30} height={30} />
				<div className='ml-6'>
					<Image src={userIcn} alt='user icon' width={30} height={30} />
				</div>
			</div>
		</div>
	);

	return (
		<header className='border-b-2 border-solid border-light-white'>
			<div className='h-[120px] container px-4 lg:px-0 mx-auto flex items-center justify-between'>
				{renderBrand()}
				{renderNavlink()}
				{renderAction()}
			</div>
		</header>
	);
}
