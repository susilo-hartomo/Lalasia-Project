import React, { useRef } from 'react';
import Image from 'next/image';

function ArticleSlickCard({ img, category, title, prefix }) {
    return (
        // <div className='w-full'>
        <div className='relative bg-red-400 w-full'>
            <div className='lg:w-[582px] lg:h-[565px] w-full h-[200px]'>
                <Image src={img} alt={'imageArticle'} />
            </div>
            <div className='absolute bottom-0 left-0 right-0 px-4 py-2 opacity-70'>
                <p className='text-white mb-[21px]'>{category}</p>
                <div className='lg:w-[530px] lg:h-[118px]'>
                    <h3 className='heading text-white font-bold mb-[14px] hover:text-slate-500'>{title}</h3>
                    <p className='text-white mb-[16px'>{prefix}</p>
                </div>
            </div>
        </div>
        // </div>
    );
}

export default ArticleSlickCard;
