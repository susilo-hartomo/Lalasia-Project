import React, { useRef } from 'react';
import Image from 'next/image';

function TestimoniCard({ name, quote, rate, img, iconQute, iconStar }) {
    return (
        <div className='w-[545px] h-[256px] px-6 py-6' style={{ boxShadow: '0px 4px 100px rgba(175, 173, 181, 0.1)' }}>
            <div className='mb-6'>
                <Image src={iconQute} alt={'iconQuote'} />
            </div>
            <p className='text-paragraph-1'>{quote}</p>
            <div className='flex flex-row justify-between mt-6'>
                <div className='flex flex-row items-center gap-3'>
                    <Image src={img} alt={'acountImage'} />
                    <h4 className='font-bold'>{name}</h4>
                </div>
                <div className='flex flex-row items-center gap-[10px]'>
                    <Image src={iconStar} alt={'star'} />
                    <h5 className='font-bold'>{rate}</h5>
                </div>
            </div>
        </div>
    );
}

export default TestimoniCard;
