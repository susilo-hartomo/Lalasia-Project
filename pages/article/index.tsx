import React from 'react'
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import { ArticleTypes } from 'lib/types'
import Layout from '@/components/Layout'
import { getAllNews, getTwoLatestNews } from 'lib/helper/fetchArticle'

interface props {
    twolatestnews: ArticleTypes[]
    allnews: ArticleTypes[]
}

const index: NextPage<props> = ({ twolatestnews, allnews }) => {
    const RenderHeadArticle = () => {
        return (
            <>
                <h1 className="text-title-1 text-center ">Article</h1>
                <p className="text-center  mx-auto px-4 text-paragraph-1">
                    We display product based on latest products we have, if you
                    want to see old products please enter the name of the item
                </p>
            </>
        )
    }

    const RenderCarousel = () => {
        return <>This is carousel</>
    }

    const RenderTrendingTopics = () => {
        return (
            <>
                <h5 style={{ fontWeight: 'bold' }}>
                    Trending Topics Latest News
                </h5>
                {twolatestnews.map((item, i) => {
                    return (
                        <div key={i}>
                            <div>{item.title}</div>
                            <div>{item.author}</div>
                        </div>
                    )
                })}
            </>
        )
    }

    const RenderAllNews = () => {
        return (
            <>
                <h5 style={{ fontWeight: 'bold' }}>All News</h5>
                {allnews.map((item, i) => {
                    return (
                        <div key={i}>
                            <div>{item.title}</div>
                            <div>{item.author}</div>
                        </div>
                    )
                })}
            </>
        )
    }
    const RenderNewsLetter = () => {
        return <>This is newsletter</>
    }

    return (
        <Layout title={'article'} content={'asdas'}>
            <RenderHeadArticle />
            <RenderCarousel />
            <RenderTrendingTopics />
            <RenderAllNews />
            <RenderNewsLetter />
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const twolatestnews: ArticleTypes[] = await getTwoLatestNews()
    const allnews: ArticleTypes[] = await getAllNews()

    return {
        props: {
            twolatestnews,
            allnews,
        },
        revalidate: 180,
    }
}

export default index
