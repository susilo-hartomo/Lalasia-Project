import React from 'react'
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import { ArticleTypes } from 'lib/types'
import Layout from '@/components/Layout'
import { getAllNews, getTwoLatestNews } from 'lib/helper/fetchArticle'
import ArticleCard from '@/components/card/ArticleCard'
import Container from '@/layout/ContainerTwo'
import Grid from '@mui/system/Unstable_Grid/Grid'
import ArticleCardWide from '@/components/card/ArticleCardWide'
import { Stack } from '@mui/system'

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
            <div className="my-24">
                <h6 className="text-amber-500 font-bold">Daily News</h6>
                <h3 className=" font-bold font-title-2">Today top headlines</h3>
                <Grid container spacing={3}>
                    {twolatestnews.map((item, i) => {
                        return (
                            <Grid xs={12} md={6} key={i}>
                                <ArticleCard
                                    title={item.title}
                                    author={item.author}
                                    avatar={item.avatar}
                                    category={item.category}
                                    thumbnail={item.thumbnail}
                                    date={item.date}
                                    summary={''}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        )
    }

    const RenderAllNews = () => {
        const [choosed, setChoosed] = React.useState('All')

        const buttonlist = [
            'All',
            'Tips and Trick',
            'Interior Design',
            'Design Inspiration',
            'Color Guide',
        ]

        return (
            <>
                <h5 style={{ fontWeight: 'bold' }}>Trending Topics</h5>
                <h2>Popular Last Week</h2>
                <Stack direction={'row'} spacing={8}>
                    {buttonlist.map((item, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => {
                                    setChoosed(item)
                                }}
                            >
                                {item}
                            </button>
                        )
                    })}
                </Stack>
                <Stack spacing={3.5}>
                    {allnews
                        .filter((item) => {
                            return choosed === 'All'
                                ? item
                                : item.category.includes(choosed)
                        })
                        .map((item, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <ArticleCardWide
                                        title={item.title}
                                        author={item.author}
                                        avatar={item.avatar}
                                        category={item.category}
                                        thumbnail={item.thumbnail}
                                        date={item.date}
                                        summary={item.summary}
                                    />
                                </React.Fragment>
                            )
                        })}
                </Stack>
            </>
        )
    }
    const RenderNewsLetter = () => {
        return (
            <div className="flex">
                <h2>Subscribe to our newsletter</h2>
                <div>Let's Talk</div>
            </div>
        )
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
