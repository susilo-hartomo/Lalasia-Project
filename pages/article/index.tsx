import React from 'react'
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import { ArticleTypes } from 'lib/types'
import { getAllNews, getTwoLatestNews } from 'lib/helper/fetchArticle'
import Image from 'next/image'

import Container from '@/components/Layout/ContainerTwo'
import Layout from '@/components/Layout'
import ArticleCardWide from '@/components/card/ArticleCardWide'
import BannerServiceSlick from '@/components/slick/BannerServiceSlick'
import ArticleCardTwo from '@/components/card/ArticleCardTwo'
import ArticleButton from '@/components/button/ArticleButton'
import PrimaryButton from '@/components/button/PrimaryButton'

import { arrowRightIc } from '../../assets/icons'
import BannerArticleSlick from '@/components/slick/BannerArticleSlick'
import dateToFormatted from '../../lib/helper/dateToFormatted'

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

        const [imageOrder, setImageOrder] = React.useState(0)

        const handleImageOrder = (index: number) => {
            setImageOrder(index)
        }

        return (
            <div className="w-auto h-auto relative my-12">
                <BannerArticleSlick
                    handleNext={handleImageOrder}
                    imageList={twolatestnews}
                />
                <div className="w-4/5  absolute -bottom-20 bg-white mx-auto left-0 right-0 px-10 py-12"
                    style={{boxShadow: '0px 4px 140px rgba(175, 173, 181, 0.2)'}}
                >
                    <div className="mb-4">
                        <p className="paragraph text-paragraph-1 mb-3">
                            {twolatestnews[imageOrder].category}
                        </p>
                        <h3 className="heading text-title-1">
                            {twolatestnews[imageOrder].title}
                        </h3>
                    </div>

                    <div className="flex items-center">
                        <div className='flex mr-6 items-center'>
                            <Image width={28} height={28} src={'/avatar_small.png'}/>
                            <p className="font-extrabold text-sm ml-3" style={{fontFamily: 'EudoxusSans-Bold'}}>
                                {'By ' + twolatestnews[imageOrder].author}
                            </p>
                        </div>
                        <p className="text-paragraph-1 text-sm">
                            {dateToFormatted(twolatestnews[imageOrder].date)}
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    const RenderTrendingTopics = () => {
        return (
            <div className="mt-64 mb-48">
                <div className='mb-8'>
                    <h5 className="heading text-secondary-1 mb-4">Daily News</h5>
                    <h2 className="heading">Today top headlines</h2>
                </div>
                <div className="lg:flex gap-[26px]">
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
                <div className='mt-8'>
                    <h5 className="heading text-secondary-1 mb-4">Trending Topics</h5>
                    <h2 className="heading">Popular Last Week</h2>
                </div>

                <div className="flex justify-between my-10">
                    <div className="flex gap-4">
                        {buttonlist.map((item, index) => {
                            return (
                                <ArticleButton
                                    key={index}
                                    name={item}
                                    isActiveTab={choosed == item}
                                    choosed={choosed}
                                    onClickFunction={handleChoosed}
                                />
                            )
                        })}
                    </div>
                    <button className="flex  p-4 hover:bg-light-white px-4 py-3.5 border border-gray-100 text-lg font-bold gap-2">
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
                        .map((item, i) =>  (
                            <ArticleCardWide
                                key={i}
                                title={item.title}
                                author={item.author}
                                avatar={item.avatar}
                                category={item.category}
                                thumbnail={item.thumbnail}
                                date={item.date}
                                summary={item.summary}
                            />
                            )
                        )}
                </div>
                <div className="flex justify-center my-12">
                    <button className="px-10 py-4 border border-gray-100 text-lg font-bold hover:bg-light-white">
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
                {RenderHeadArticle()}
                {RenderCarousel()}
                {RenderTrendingTopics()}
                {RenderAllNews()}
                {RenderNewsLetter()}
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
