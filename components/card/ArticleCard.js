import React, { useRef } from 'react';
import Image from 'next/image';

function ArticleCard({ img, category, title, prefix, iconProfil, name, date }) {
	return (
		<div className='flex flex-row gap-[26px] mb-7 justify-between'>
			<div className='w-[260px] h-[260px]'>
				<Image src={img} alt={'imageArticle'} width={260} height={260} />
			</div>
			<div className='h-[205px]'>
				<p className='text-paragraph-1 mb-[21px]'>{category}</p>
				<h3 className='heading font-bold mb-[14px]'>{title}</h3>
				<p className='text-paragraph-1 mb-[16px'>{prefix}</p>
				<div className='flex flex-row justify-between'>
					<div className='flex flex-row gap-[10px]'>
						<Image src={iconProfil} alt={'iconProfil'} />
						<h6 className='font-bold'>By {name}</h6>
					</div>
					<div>
						<p className='text-paragraph-1'>{date}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ArticleCard;
