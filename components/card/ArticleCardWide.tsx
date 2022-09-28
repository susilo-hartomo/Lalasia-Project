import dateToFormatted from 'lib/helper/dateToFormatted'
import { ArticleTypes } from 'lib/types'
import Image from 'next/image'
import React from 'react'

export default function ArticleCardWide(article: ArticleTypes) {
    const date = new Date(article.date)

    return (
        <div className="flex gap-6">
            <div className="relative min-w-[210px] h-[210px]">
                <Image
                    layout="fill"
                    src={article.thumbnail}
                    objectFit="cover"
                />
            </div>
            <div className="flex flex-col gap-2 justify-between">
                <p className="text-lg text-paragraph-1">{article.category}</p>
                <h3 className="bold text-2xl font-bold text-title-1">
                    {article.title}
                </h3>
                <p className="text-lg text-paragraph-1">{article.summary}</p>
                
                 <div className="flex items-center">
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
