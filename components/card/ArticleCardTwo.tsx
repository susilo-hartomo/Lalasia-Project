import React from 'react'
import { ArticleTypes } from 'lib/types'
import Image from 'next/image'

export default function ArticleCard(article: ArticleTypes) {
    const date = new Date(article.date)

    return (
        <div className="flex flex-col gap-1">
            <div className="relative w-full h-[340px]">
                <Image
                    layout="fill"
                    src={'/thumbnail.jpg'}
                    objectFit="cover"
                    alt={article.thumbnail}
                />
            </div>
            <p>{article.category}</p>
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
            <div className="flex flex-row gap-3">
                <Image width={28} height={28} src={article.avatar} />
                <div>{'By ' + article.author}</div>
                <div>
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
                </div>
            </div>
        </div>
    )
}
