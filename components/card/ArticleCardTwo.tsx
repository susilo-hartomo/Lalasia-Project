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
            <div className="mt-5">
                <p className="paragraph text-paragraph-1">
                    {article.category}
                </p>
                <h3 className="heading text-title-1 my-3">
                    {article.title}
                </h3>
                <p className="paragraph text-paragraph-1">{article.summary}</p>
                <div className="flex lg:gap-6 justify-between lg:justify-start mt-4">
                    <div className='flex'>
                        <Image width={28} height={28} src={article.avatar} />
                        <p className="font-bold text-sm leading-4 self-center ml-2">
                            {'By ' + article.author}
                        </p>
                    </div>
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
        </div>
    )
}
