import Layout from '@/components/Layout';
import React from 'react';

import CountingDesc from '@/components/items/CountingDesc';
import MissionDesc from '@/components/items/MissionDesc';

import { callRecivedIc, messageIc, awardIc } from '../../assets/icons';

function aboutUs() {
	const renderBanner = () => {
		return (
			<div className='lg:mt-[100px] mt-[72px] w-full'>
				<h1 className='text-center text-title-1 mb-5'>About Us</h1>
				<p className='text-center lg:w-1/2 mx-auto px-4 text-paragraph-1'>
					We display products based on the latest products we have, if you want to see our old products please
					enter the name of the item
				</p>
			</div>
		);
	};

	const renderOurMission = () => {
		return (
			<div className='lg:flex lg:my-[90px] lg:gap-20 xl:gap-24  px-4 lg:px-8 xl:px-0'>
				<div className='lg:w-1/2'>
					<h5 className='text-secondary-1 mb-4'>Our Mission</h5>
					<h2 className='heading pr-6'>Our team dedicated to help find smart home product</h2>
					<div className='flex gap-12 lg:mt-12 mt-8'>
						<CountingDesc total={20} prefix='+' desc='Years Experience' />
						<CountingDesc total={483} desc='Happy Client' />
						<CountingDesc total={150} prefix='+' desc='Project Finished' />
					</div>
				</div>
				<div className='lg:w-1/2 mt-8 lg:mt-0'>
					<MissionDesc
						containerStyle='mb-10'
						icon={callRecivedIc}
						alt='mission priority'
						title={'24/7 Supports'}
						desc={'24/7 support means a support service that is provided 24 hours a day and 7 days a week.'}
					/>
					<MissionDesc
						containerStyle='mb-10'
						icon={messageIc}
						alt='mission priority'
						title={'Free Consultation'}
						desc={`A free consultation is a one-on-one interaction or conversation given freely to share one's thoughts and discuss possible`}
					/>
					<MissionDesc
						containerStyle='mb-10'
						icon={awardIc}
						alt='mission priority'
						title={'Overall Guarantee'}
						desc={
							'The comprehensive guarantee is required for import, warehousing, transit, processing and specific use.'
						}
					/>
				</div>
			</div>
		);
	};

	return (
		<Layout title='About Us' content='We are the one'>
			<div className='container mx-auto px-2 lg:px-0'>
				{renderBanner()}
				{renderOurMission()}
			</div>
		</Layout>
	);
}

export default aboutUs;
