import Layout from '@/components/Layout';
import React from 'react';

export default function Product() {
	return (
		<Layout>
			<div class="container dark:bg- mx-auto grid grid-cols-4 md:grid-cols-12 gap-1 md:gap-2 my-4 px-4">
				<h1 class="text-h1 col-span-4 md:col-span-12 text-center font-bold">Products</h1>
				<p class="col-span-3 md:col-span-6 md:col-start-4 text-center mb-3 md:mb-10 text-p1 text-gray-800">We display products based on the latest products we have, if you want to see our old products please enter the name of the item</p>
			</div>
		</Layout>
	);
}
