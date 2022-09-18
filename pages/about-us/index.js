import Layout from '@/components/Layout';
import React from 'react';

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
	return (
		<Layout title='About Us' content='We are the one'>
			<div className='container mx-auto px-2 lg:px-0'>{renderBanner()}</div>
		</Layout>
	);
}

export default aboutUs;
