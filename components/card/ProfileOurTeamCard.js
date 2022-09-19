import React from 'react';
import Image from 'next/image';

function ProfileOurTeamCard({ img, name, grade }) {
	return (
		<div>
			<div className='relative h-[365px] w-[400px]'>
				<Image src={img} alt={`${name}`} width={400} height={365} layout='responsive' />
			</div>
			<div className=' mt-6 mb-7'>
				<h3>{name}</h3>
				<p className='text-paragraph-1'>{grade}</p>
			</div>
		</div>
	);
}

export default ProfileOurTeamCard;
