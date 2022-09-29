import React from 'react'
import { ArticleTypes } from 'lib/types'
import Image from 'next/image'
import dateToFormatted from 'lib/helper/dateToFormatted'

export default function ArticleCard(article: ArticleTypes) {
  const date = new Date(article.date)

  return (
    <div className="flex flex-col gap-2">
      <div className="relative w-full h-[340px]">
        <Image
          layout="fill"
          src={'/thumbnail.jpg'}
          objectFit="cover"
          alt={article.thumbnail}
        />
      </div>
      <div className="mt-5">
        <p className="paragraph text-paragraph-1">{article.category}</p>
        <h3 className="heading text-title-1 my-3">{article.title}</h3>
        <p className="paragraph text-paragraph-1">{article.summary}</p>
        <div className="flex items-center mt-4">
            <div className='flex mr-6 items-center'>
                <Image width={28} height={28} src={article.avatar}/>
                <p className="font-extrabold text-sm ml-3" style={{fontFamily: 'EudoxusSans-Bold'}}>
                    {'By ' + article.author}
                </p>
            </div>
            <p className="text-paragraph-1 text-sm">
                {dateToFormatted(article.date)}
            </p>
        </div>

      </div>
    </div>
  )
}
