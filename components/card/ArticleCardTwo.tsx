import React from 'react'
import { ArticleTypes } from 'lib/types'
import Image from 'next/image'
import dateToFormatted from 'lib/helper/dateToFormatted'

export default function ArticleCard(article: ArticleTypes) {
  const date = new Date(article.date)

  return (
    <div className="flex flex-col gap-2 md:mb-0 mb-5">
      <div className="relative w-full md:h-[340px] h-[200px]">
        <Image
          layout="fill"
          src={'/thumbnail.jpg'}
          objectFit="cover"
          alt={article.thumbnail}
        />
      </div>
      <div className="mt-5 ">
        <p className="paragraph text-xs font-bold text-paragraph-1">
          {article.category}
        </p>
        <h3 className="heading text-sm text-title-1 my-2">{article.title}</h3>
        <p className="paragraph text-paragraph-1 line-clamp-2">
          {article.summary}
        </p>
        <div className="flex lg:gap-6 justify-between lg:justify-start mt-4">
          <div className="flex">
            <Image width={28} height={28} src={article.avatar} />
            <p className="font-bold text-sm leading-4 self-center ml-2">
              {'By ' + article.author}
            </p>
          </div>
          <p className="text-paragraph-1 text-sm leading-4 self-center">
            {dateToFormatted(article.date)}
          </p>
        </div>
      </div>
    </div>
  )
}
