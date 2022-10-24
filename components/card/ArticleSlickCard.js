import React, { useRef } from 'react'
import Image from 'next/image'

function ArticleSlickCard({ img, category, title, prefix }) {
  return (
    <div className="relative bg-gray-200/60">
      <div className="lg:w-[582px] lg:h-[565px] h-[200px]">
        <Image src={img} alt={'imageArticle'} layout="fill" />
      </div>
      <div className="w-full z-10 h-3/4 absolute bottom-0 left-0 bg-gradient-to-t from-title-1/60 to-transparent"></div>
      <div className="absolute z-20 bottom-0 left-0 right-0 lg:p-6 p-3">
        <p className="text-white lg:mb-[21px]">{category}</p>
        <div className="">
          <h3 className="heading opacity-100 text-white font-bold ">{title}</h3>
          <p className="text-white lg:mb-[16px]">{prefix}</p>
          <p className="text-white font-medium opacity-100">Read More</p>
        </div>
      </div>
    </div>
  )
}

export default ArticleSlickCard
