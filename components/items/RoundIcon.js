import React from 'react';
import Image from 'next/image';

function RoundIcon({ icon, alt }) {
	return (
		<div className='lg:p-4 p-2 box-border relative rounded-full bg-placholder-1 h-fit lg:min-w-[62px] lg:max-h-[62px] min-h-[44px] min-w-[44px]'>
			<Image
				src={icon}
				alt={alt}
				width={24}
				height={24}
				layout='responsive'
				// className='lg:h-[30px] lg:w-[30px] max-w-[24px] max-h-[24px]'
			/>
		</div>
	);
}

export default RoundIcon;
