import React, { useRef } from 'react';
import Image from 'next/image';

function ArticleSlickCard({ img, category, title, prefix }) {
    return (
        <div className='relative bg-red-400'>
            <div className='lg:w-[582px] lg:h-[565px] h-[200px]'>
                <Image src={img} alt={'imageArticle'} layout='fill' />
            </div>
            <div className='absolute bottom-0 left-0 right-0 px-4 py-2 opacity-70'>
                <p className='text-white lg:mb-[21px]'>{category}</p>
                <div className='lg:w-[530px] lg:h-[118px]'>
                    <h3 className='heading text-white font-bold lg:backdrop:mb-[14px] hover:text-slate-500'>{title}</h3>
                    <p className='text-white lg:mb-[16px]'>{prefix}</p>
                    <p className='font-bold lg:hidden text-white'>Read More . . </p>
                </div>
            </div>
        </div>
    );
}

export default ArticleSlickCard;
