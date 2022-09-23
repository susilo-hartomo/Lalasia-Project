import { Stack } from '@mui/system'
import { ArticleTypes } from 'lib/types'
import Image from 'next/image'
import React from 'react'

export default function ArticleCardWide(article: ArticleTypes) {
    return (
        <div className="">
            <Stack direction={'row'}>
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

                <div>
                    <p>{article.category}</p>
                    <h3>{article.title}</h3>
                    <h4>{article.summary}</h4>
                    <Stack direction={'row'}>
                        <div>{article.author}</div>
                        <Image width={28} height={28} src={article.avatar} />
                        <div>{article.date}</div>
                    </Stack>
                </div>
            </Stack>
        </div>
    )
}
