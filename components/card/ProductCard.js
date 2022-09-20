import React, { useRef } from 'react';
import Image from 'next/image';

function ProductCard({ img, category, name, desc, price }) {
    return (
        <div className='w-[394px] h-[544px]' style={{ boxShadow: '0px 4px 100px rgba(175, 173, 181, 0.1)' }}>
            <div className='w-[394px] h-[360px] relative'>
                <Image src={img} alt='product' layout='fill' />
            </div>
            <div className=''>
                <h5 className='heading text-paragraph-1'>{category}</h5>
                <h3 className='font-bold text-title-1'>{name}</h3>
                <p className='text-paragraph-1'>{desc}</p>
                <h3 className='heading text-title-1 mb-3'>{price}</h3>
            </div>
        </div>
    );
}

export default ProductCard;
