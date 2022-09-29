import React, { useRef } from 'react';
import Image from 'next/image';

function ArticleCard({ img, category, title, prefix, iconProfil, name, date }) {
	return (
		<div className='w-[327px] h-[110px] lg:w-full flex flex-row gap-3 lg:mb-7 mb-5 justify-between items-center'>
			<div className='lg:w-[260px] lg:h-[260px] w-[110px] h-[110px]'>
				<Image src={img} alt={'imageArticle'} />
			</div>
			<div className='lg:h-[205px] lg:w-[329px] h-[106px] w-[203px]'>
				<p className='text-paragraph-1 lg:mb-[21px] mb-1'>{category}</p>
				<h3 className='heading font-bold lg:mb-[14px] mb-3 hover:text-slate-500 truncate'>{title}</h3>
				<p className='text-paragraph-1 lg:mb-[16px] lg:block npm hidden'>{prefix}</p>
				<div className='lg:flex flex-row justify-between '>
					<div className='flex flex-row gap-[10px]'>
						<div className='w-4 h-4 lg:w-7 lg:h-7'>
							<Image src={iconProfil} alt={'iconProfil'} />
						</div>
						<h6 className='font-bold text-xs'>By {name}</h6>
					</div>
					<div>
						<p className='text-paragraph-1 lg:flex hidden'>{date}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ArticleCard;
