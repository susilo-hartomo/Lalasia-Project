import React from 'react'
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import { ArticleTypes } from 'lib/types'
import Layout from '@/components/Layout'
import { getAllNews, getTwoLatestNews } from 'lib/helper/fetchArticle'
import ArticleCard from '@/components/card/ArticleCard'
import Container from '@/layout/ContainerTwo'
import ArticleCardWide from '@/components/card/ArticleCardWide'
import Slider from 'react-slick'
import Image from 'next/image'

import BannerServiceSlick from '@/components/slick/BannerServiceSlick'
import ArticleCardTwo from '@/components/card/ArticleCardTwo'
import ArticleButton from '@/components/button/ArticleButton'

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
        const settings = {
            dots: true,
        }
        return (
            <div className="w-auto h-auto relative my-12">
                <BannerServiceSlick />
                <div className="flex flex-col justify-between w-4/5 h-2/6  absolute -bottom-20 bg-white mx-auto left-0 right-0 shadow-md p-8">
                    <div className="flex flex-col gap-2 justify-between">
                        <p>Tips and Trick</p>
                        <h3>
                            This 400-Square-Foot New York Apartment Is Maximed
                            With Custom Millwork
                        </h3>

                        <div className="flex flex-row gap-2">
                            <div>By Morgan Goldberg</div>
                            <Image
                                width={28}
                                height={28}
                                src={'/avatar_small.png'}
                            />
                            <div>Tuesday,17 March 2022</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const RenderTrendingTopics = () => {
        return (
            <div className="mt-64 mb-48">
                <h6 className="text-amber-500 font-bold">Daily News</h6>
                <h3 className=" font-bold font-title-2">Today top headlines</h3>
                <div className="flex flex-row mt-4 gap-[26px]">
                    {twolatestnews.map((item, i) => {
                        return (
                            <div className="w-1/2 bg-cyan-100" key={i}>
                                <ArticleCardTwo
                                    title={item.title}
                                    author={item.author}
                                    avatar={item.avatar}
                                    category={item.category}
                                    thumbnail={item.thumbnail}
                                    date={item.date}
                                    summary={''}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    const RenderAllNews = () => {
        const [choosed, setChoosed] = React.useState('All')

        const handleChoosed = (item: string) => {
            console.log(item)
            setChoosed(item)
        }

        const buttonlist = [
            'All',
            'Tips and Trick',
            'Interior Design',
            'Design Inspiration',
            'Color Guide',
        ]

        return (
            <div className="my-48">
                <h5 style={{ fontWeight: 'bold' }}>Trending Topics</h5>
                <h2>Popular Last Week</h2>

                <div className="flex flex-row gap-8 justify-between my-8">
                    <div className="flex flex-row gap-8">
                        {buttonlist.map((item, index) => {
                            return (
                                <ArticleButton
                                    name={item}
                                    choosed={choosed}
                                    onClickFunction={handleChoosed}
                                />
                                // <button
                                //     key={index}
                                //     onClick={() => {
                                //         setChoosed(item)
                                //     }}
                                //     className="p-4"
                                // >
                                //     {item}
                                // </button>
                            )
                        })}
                    </div>
                    <div className="flex text-center p-4">Filter</div>
                </div>
                <div className="flex flex-col gap-8">
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
                </div>
                <div className="flex justify-center my-12">
                    <button>Load More</button>
                </div>
            </div>
        )
    }

    const RenderNewsLetter = () => {
        return (
            <div className="flex flex-row justify-between my-8">
                <h2>Subscribe to our newsletter</h2>
                <button className="p-4 bg-green-300">
                    <span>Let's Talk</span>
                </button>
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
