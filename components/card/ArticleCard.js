import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ArticleCard({ img, category, title, prefix, iconProfil, name, date }) {
  return (
    <Link href={'/article/1'}>
      <a className=" cursor-pointer">
        <div className="w-[327px] h-[110px] lg:h-[260px] lg:w-full flex flex-row gap-3 lg:mb-7 mb-5 justify-between items-center">
          <div className="lg:w-[260px] lg:h-[260px] w-[110px] h-[110px]">
            <Image src={img} alt={'imageArticle'} />
          </div>
          <div className="lg:h-[205px] lg:w-[329px] h-[106px] w-[203px]">
            <p className="text-paragraph-1 lg:mb-[21px] mb-1 paragraph font-bold">
              {category}
            </p>
            <h3 className="heading leading-6 lg:leading-8 h-12 lg:h-16 font-bold lg:mb-[14px] mb-3 hover:text-slate-500 text-ellipsis overflow-hidden ">
              {title}
            </h3>
            <p className="text-paragraph-1 lg:mb-[16px] lg:block hidden">
              {prefix}
            </p>
            <div className="lg:flex flex-row justify-between items-center">
              <div className="flex flex-row gap-[10px] items-center">
                <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full relative">
                  <Image src={iconProfil} alt={'iconProfil'} layout="fill" />
                </div>
                <h6 className="font-bold text-sm">By {name}</h6>
              </div>
              <div>
                <p className="text-paragraph-1 text-sm lg:block paragraph hidden">
                  {date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ArticleCard
