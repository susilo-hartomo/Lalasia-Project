import React from 'react'
import { ArticleTypes } from 'lib/types'
import Image from 'next/image'

export default function ArticleCard(article: ArticleTypes) {
    return (
        <div className="block">
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    maxHeight: '340px',
                }}
            >
                <Image
                    layout="fill"
                    src={article.thumbnail}
                    objectFit="cover"
                />
            </div>

            <div>{article.title}</div>
            <div>{article.author}</div>
            <div>{article.avatar}</div>
            <div>{article.category}</div>
            <div>{article.date}</div>
            <div>{article.summary}</div>
            <div>{article.thumbnail}</div>
        </div>
    )
}
