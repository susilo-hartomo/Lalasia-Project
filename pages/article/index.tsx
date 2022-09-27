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
import PrimaryButton from '@/components/button/PrimaryButton'

import { arrowRightIc } from '../../assets/icons'
import BannerArticleSlick from '@/components/slick/BannerArticleSlick'

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
                <BannerArticleSlick />
                <div className="flex flex-col justify-between w-4/5 h-2/6  absolute -bottom-20 bg-white mx-auto left-0 right-0 shadow-md p-8">
                    <div className="flex flex-col gap-2 justify-between">
                        <p className="text-lg text-paragraph-1">
                            Tips and Trick
                        </p>
                        <h3 className="bold text-2xl font-bold text-title-1">
                            This 400-Square-Foot New York Apartment Is Maximed
                            With Custom Millwork
                        </h3>

                        <div className="flex flex-row gap-2">
                            <Image
                                width={28}
                                height={28}
                                src={'/avatar_small.png'}
                            />
                            <p className="font-bold text-sm leading-4 self-center">
                                By Morgan Goldberg
                            </p>
                            <p className="text-paragraph-1 text-sm leading-4 self-center">
                                Tuesday,17 March 2022
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const RenderTrendingTopics = () => {
        return (
            <div className="mt-64 mb-48">
                <h5 className="font-bold text-secondary-1 text-lg">
                    Daily News
                </h5>
                <h2 className="heading">Today top headlines</h2>
                <div className="flex flex-row mt-4 gap-[26px]">
                    {twolatestnews.map((item, i) => {
                        return (
                            <div className="w-1/2" key={i}>
                                <ArticleCardTwo
                                    title={item.title}
                                    author={item.author}
                                    avatar={item.avatar}
                                    category={item.category}
                                    thumbnail={item.thumbnail}
                                    date={item.date}
                                    summary={item.summary}
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
                <h5 className="font-bold text-secondary-1 text-lg">
                    Trending Topics
                </h5>

                <h2 className="heading">Popular Last Week</h2>

                <div className="flex flex-row gap-8 justify-between my-10">
                    <div className="flex flex-row gap-8">
                        {buttonlist.map((item, index) => {
                            return (
                                <ArticleButton
                                    name={item}
                                    choosed={choosed}
                                    onClickFunction={handleChoosed}
                                />
                            )
                        })}
                    </div>
                    <button className="flex flex-row  p-4 bg-gray-50 px-5 py-3.5 border border-gray-100 text-lg font-bold">
                        <Image src="/sort.png" width={30} height={30} />
                        <p className="font-semibold">Filter</p>
                    </button>
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
                    <button className="bg-gray-50 px-5 py-3.5 border border-gray-100 text-lg font-bold">
                        Load More
                    </button>
                </div>
            </div>
        )
    }

    const RenderNewsLetter = () => {
        return (
            <div className="flex flex-row justify-between my-8">
                <h2 className="heading">Subscribe to our newsletter</h2>
                <PrimaryButton
                    text="Let's Talk"
                    onClick={() => alert('press button')}
                    icon={arrowRightIc}
                    width={undefined}
                />
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
