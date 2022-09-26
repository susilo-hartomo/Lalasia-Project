import React from 'react'
import { ArticleTypes } from 'lib/types'
import Image from 'next/image'

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
            <p className="text-lg text-paragraph-1 leading-4 mt-2">
                {article.category}
            </p>
            <h3 className="bold text-2xl font-bold text-title-1">
                {article.title}
            </h3>
            <p className="text-lg text-paragraph-1">{article.summary}</p>
            <div className="flex flex-row gap-2 mt-1">
                <Image width={28} height={28} src={article.avatar} />
                <p className="font-bold text-sm leading-4 self-center">
                    {'By ' + article.author}
                </p>
                <p className="text-paragraph-1 text-sm leading-4 self-center">
                    {date.toLocaleDateString('en-US', {
                        weekday: 'long',
                    }) +
                        ', ' +
                        date.getDay() +
                        ' ' +
                        date.toLocaleDateString('en-US', {
                            month: 'long',
                            year: 'numeric',
                        })}
                </p>
            </div>
        </div>
    )
}
