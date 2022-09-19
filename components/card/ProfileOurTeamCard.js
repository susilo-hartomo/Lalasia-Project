import React, { useRef } from 'react';
import Image from 'next/image';

function ProfileOurTeamCard({ img, name, grade }) {
	return (
		<div className='w-full lg:w-fit'>
			<div className='relative lg:h-[365px] lg:w-[400px] min-w-full h-fit'>
				<Image src={img} alt={`${name}`} width={400} height={365} layout='responsive' />
			</div>
			<div className='mt-6 mb-7'>
				<h3>{name}</h3>
				<p className='text-paragraph-1'>{grade}</p>
			</div>
		</div>
	);
}

export default ProfileOurTeamCard;
