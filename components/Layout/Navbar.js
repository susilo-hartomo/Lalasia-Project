import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { brandImg, brandText } from '../../assets/images';
import { humbergerIcn, cartIcn, userIcn, closeIcn } from '../../assets/icons';

import { navlist } from '../../constants';

export default function Navbar() {
	const router = useRouter();
	const [isShowMobileNavbar, setIsShowMobileNavbar] = useState(false);
	const [scrollTop, setScrollTop] = useState(0);

	const onScroll = (e) => {
		setScrollTop(e.target.documentElement.scrollTop);
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, [scrollTop]);

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

	const renderNavlink = () => {
		return (
			<nav
				className={`lg:flex h-full w-full lg:w-auto absolute lg:static z-50 top-[74px] left-0 min-h-screen lg:min-h-fit p-4 lg:p-0 ${
					isShowMobileNavbar ? 'left-0 bg-white' : 'left-full'
				}`}>
				{navlist.map((item, index) => (
					<Link href={item.route} key={index}>
						<a
							className={`paragraph par-1 lg:h-full lg:leading-[7.5rem] pt-2 pb-5 lg:py-0 block mb-4 lg:mb-0 ${
								item.route == router.pathname ? 'text-primary-1 border-b-4 border-primary-1' : null
							} ${
								index === 0
									? 'lg:mr-[30px]'
									: index === navlist.length - 1
									? 'lg:ml-[30px]'
									: `lg:mx-[30px]`
							}`}>
							{item.path}
						</a>
					</Link>
				))}
			</nav>
		);
	};

	const renderAction = () => (
		<div>
			{isShowMobileNavbar ? (
				<div className='lg:hidden cursor-pointer' onClick={() => setIsShowMobileNavbar(false)}>
					<Image src={closeIcn} alt='chart icon' width={30} height={30} />
				</div>
			) : (
				<div className='lg:hidden cursor-pointer' onClick={() => setIsShowMobileNavbar(true)}>
					<Image src={humbergerIcn} alt='chart icon' width={30} height={30} />
				</div>
			)}
			<div className='lg:flex items-center hidden'>
				<Image src={cartIcn} alt='chart icon' width={30} height={30} />
				<div className='ml-6'>
					<Image src={userIcn} alt='user icon' width={30} height={30} />
				</div>
			</div>
		</div>
	);

	return (
		<header
			className={`border-b-2 border-solid border-light-white w-full ${
				isShowMobileNavbar ? '' : 'overflow-hidden'
			} ${scrollTop > 125 ? 'fixed bg-white w-screen top-0 duration-1000 z-50 translate-y-0' : 'relative'} ${
				scrollTop > 120 && scrollTop < 125 && '-translate-y-[240px]'
			}`}>
			<div className='lg:h-[120px] h-[72px] container px-4 lg:px-0 mx-auto flex items-center justify-between'>
				{renderBrand()}
				{renderNavlink()}
				{renderAction()}
			</div>
		</header>
	);
}
