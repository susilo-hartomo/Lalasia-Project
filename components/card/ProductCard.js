import React, { useRef } from 'react'
import Image from 'next/image'

function ProductCard({
  img,
  category,
  name,
  desc,
  price,
  responsiveParent,
  responsiveImgParent,
}) {
  return (
    <div
      className={`${
        responsiveParent ? responsiveParent : 'w-[394px] h-[544px]'
      }`}
      style={{ boxShadow: '0px 4px 100px rgba(175, 173, 181, 0.1)' }}
    >
      <div
        className={`${
          responsiveImgParent ? responsiveImgParent : 'w-[394px] h-[360px]'
        } relative`}
      >
        <Image src={img} alt="product" layout="fill" />
      </div>
      <div className="my-3">
        <h5 className={`heading text-paragraph-1`}>{category}</h5>
        <h3
          className={`font-bold text-title-1 ${
            responsiveParent
              ? 'whitespace-nowrap truncate text-base my-3 lg:text-2xl'
              : 'mb-1'
          }`}
        >
          {name}
        </h3>
        <p
          className={`text-paragraph-1 ${
            responsiveParent ? 'whitespace-nowrap truncate my-3' : 'mb-4'
          }`}
        >
          {desc}
        </p>
        <h3 className={`heading text-title-1 text-sm lg:text-xl`}>{price}</h3>
      </div>
    </div>
  )
}

export default ProductCard
