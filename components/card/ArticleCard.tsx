import React from 'react'
import { ArticleTypes } from 'lib/types'
import Image from 'next/image'
import { Box, Stack } from '@mui/system'

export default function ArticleCard(article: ArticleTypes) {
    return (
        <div>
            <Box sx={{ position: 'relative', width: '100%', height: '340px' }}>
                <Image
                    layout="fill"
                    src={article.thumbnail}
                    objectFit="cover"
                />
            </Box>
            <p>{article.category}</p>
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
            <Stack direction={'row'}>
                <div>{article.author}</div>
                <Image width={28} height={28} src={article.avatar} />
                <div>{article.date}</div>
            </Stack>
        </div>
    )
}
