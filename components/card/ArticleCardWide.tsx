import { ArticleTypes } from 'lib/types'
import Image from 'next/image'
import React from 'react'

export default function ArticleCardWide(article: ArticleTypes) {
    const date = new Date(article.date)

    return (
        <div className="flex flex-row gap-6">
            <div
                style={{
                    position: 'relative',
                    width: '210px',
                    height: '210px',
                }}
            >
                <Image
                    layout="fill"
                    src={article.thumbnail}
                    objectFit="cover"
                />
            </div>
            <div className="flex flex-col gap-2 justify-between">
                <p>{article.category}</p>
                <h3>{article.title}</h3>
                <h4>{article.summary}</h4>
                <div className="flex flex-row gap-2">
                    <div>{article.author}</div>
                    <Image width={28} height={28} src={article.avatar} />
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
        </div>
    )
}
