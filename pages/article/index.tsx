import React from 'react'
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import { ArticleTypes } from 'lib/types'
import Layout from '@/components/Layout'
import { getAllNews, getTwoLatestNews } from 'lib/helper/fetchArticle'
import ArticleCard from '@/components/card/ArticleCard'
import Container from '@/layout/Container'

interface props {
    twolatestnews: ArticleTypes[]
    allnews: ArticleTypes[]
}

const index: NextPage<props> = ({ twolatestnews, allnews }) => {
    const RenderHeadArticle = () => {
        return (
            <div className="mb-4 mt-16">
                <h1 className="text-title-1 text-center ">Article</h1>

                <p className="text-center w-1/2 mx-auto px-4 text-paragraph-1">
                    We display product based on latest products we have, if you
                    want to see old products please enter the name of the item
                </p>
            </div>
        )
    }

    const RenderCarousel = () => {
        return <></>
    }

    const RenderTrendingTopics = () => {
        return (
            <>
                <h6 className="text-amber-500 font-bold">Daily News</h6>
                <h3 className=" font-bold font-title-2">Today top headlines</h3>
                <div className="grid gap-x-8 grid-cols-2">
                    {twolatestnews.map((item, i) => {
                        return (
                            <React.Fragment key={i}>
                                <ArticleCard
                                    title={item.title}
                                    author={item.author}
                                    avatar={item.avatar}
                                    category={item.category}
                                    thumbnail={item.thumbnail}
                                    date={item.date}
                                    summary={''}
                                />
                            </React.Fragment>
                            // <div key={i} className="flex w-1/2">
                            //     <div>{item.title}</div>
                            //     <div>{item.author}</div>
                            // </div>
                        )
                    })}
                </div>
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
            <Container>
                <RenderHeadArticle />
                <RenderCarousel />
                <RenderTrendingTopics />
                <RenderAllNews />
                <RenderNewsLetter />
            </Container>
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
