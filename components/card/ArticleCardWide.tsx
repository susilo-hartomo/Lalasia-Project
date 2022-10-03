import dateToFormatted from 'lib/helper/dateToFormatted'
import { ArticleTypes } from 'lib/types'
import Image from 'next/image'
import React from 'react'

export default function ArticleCardWide(article: ArticleTypes) {
  const date = new Date(article.date)

  return (
    <div className="flex flex-row md:gap-6 gap-5">
      <div className="relative md:min-w-[210px] md:h-[210px] min-w-[110px] h-[110px]">
        <Image layout="fill" src={article.thumbnail} objectFit="cover" />
      </div>
      <div className="flex flex-col md:gap-2 gap-0 md:justify-between  py-1">
        <p className="md:text-lg text-xs text-paragraph-1 md:font-normal font-medium">
          {article.category}
        </p>
        <h3 className="bold md:text-2xl text-base font-bold text-title-1 line-clamp-2 capitalize">
          {article.title}
        </h3>
        <p className="text-lg text-paragraph-1 md:flex hidden ">
          {article.summary}
        </p>
        <div className="flex flex-row gap-2 md:mt-0 mt-auto">
          <div className="md:w-[28px] md:h-[28px] w-[20px] h-[20px]">
            <Image width={28} height={28} src={article.avatar} />
          </div>
          <p className="font-bold md:text-sm text-xs leading-4 self-center">
            {'By ' + article.author}
          </p>
          <p className="text-paragraph-1 text-sm leading-4 self-center md:flex hidden">
            {dateToFormatted(article.date)}
          </p>
        </div>
      </div>
    </div>
  )
}
