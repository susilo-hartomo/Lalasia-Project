import dateToFormatted from 'lib/helper/dateToFormatted'
import { ArticleTypes } from 'lib/types'
import Image from 'next/image'
import React from 'react'

export default function ArticleCardWide(article: ArticleTypes) {
    const date = new Date(article.date)

    return (
        <div className="flex flex-row gap-6">
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
                <div className="flex flex-row gap-2">
                    <Image width={28} height={28} src={article.avatar} />
                    <p className="font-bold text-sm leading-4 self-center">
                        {'By ' + article.author}
                    </p>
                    <p className="text-paragraph-1 text-sm leading-4 self-center">
                        {dateToFormatted(article.date)}
                    </p>
                </div>
            </div>
        </div>
    )
}
