import PrimaryButton from '@/components/button/PrimaryButton'
import BenefitsCard from '@/components/card/BenefitsCard'
import Layout from '@/components/Layout/index'
import ProductSlick from '@/components/slick/ProductSlick'
import Image from 'next/image'
import { isTemplateSpan } from 'typescript'
import {
    abstractStars,
    spiral,
    searchNormal,
    banner,
    ourProduct1,
    ourProduct2,
} from '../assets/images'
import { Benefits } from '../constants'
import CountingDesc from '@/components/items/CountingDesc'
import TestimoniSlick from '@/components/slick/TestimoniSlick'
import { articles } from 'constants/articles'
import ArticleCard from '@/components/card/ArticleCard'

export default function Home() {
    const renderBanner = () => {
        return (
            <div className="container mx-auto relative">
                <div className="mb-24">
                    <h1 className="heading text-center lg:w-[724px] mx-auto lg:mt-[100px] mt-[50px] relative">
                        Discover Furniture With High Quality Wood
                        <span className="lg:-mt-[12px] absolute mx-1 lg:mx-2 w-[24px] h-[24px] lg:w-[51px] lg:h-[51px]">
                            <Image src={abstractStars} alt="Lalasia stars" />
                        </span>
                    </h1>
                    <div className="absolute top-[60px] lg:mx-[100px] w-[83.43px] h-[83.43px] lg:w-[249.07px] lg:h-[249.07px]">
                        <Image src={spiral} alt="Lalasia spiral" />
                    </div>
                    <p className="relative text-center mx-auto  lg:w-[796px] paragraph par1 px-4 mt-[30px]">
                        Pellentesque etiam blandit in tincidunt at donec. Eget
                        ipsum dignissim placerat nisi, adipiscing mauris non.
                        Purus parturient viverra nunc, tortor sit laoreet. Quam
                        tincidunt aliquam adipiscing tempor.
                    </p>
                </div>
                <div className="relative">
                    <div className="absolute z-10 -top-24 w-full left-auto right-auto">
                        <div
                            className="mx-auto lg:w-[810px] mt-[50px] lg:h-[84px] bg-white flex justify-between items-center px-4 gap-[18px]"
                            style={{
                                boxShadow:
                                    '0px 4px 80px rgba(175, 173, 181, 0.2)',
                            }}
                        >
                            <Image
                                className="w-[32px] h-[32px]"
                                src={searchNormal}
                                alt="search"
                            />
                            <input
                                className="w-[70%] h-[50px] p-2 focus:outline-none text-paragraph-1"
                                type="search"
                                placeholder="Search Property"
                            />
                            <PrimaryButton text={'Search'} />
                        </div>
                    </div>
                    <div className="w-full h-[480px] relative">
                        <Image src={banner} alt="banner" layout="fill" />
                    </div>
                </div>
            </div>
        )
    }

    const renderBenefit = () => {
        return (
            <div className="container mx-auto relative lg:mt-44 mt-24">
                <div className="lg:flex flex-row justify-between items-center px-4 lg:px-0">
                    <div className="lg:w-[427px] w-full mb-4 lg:mb-0">
                        <h5 className="heading text-secondary-1 mb-4">
                            Benefits
                        </h5>
                        <h2 className="heading">
                            Benefit when using our services
                        </h2>
                    </div>
                    <p className="text-paragraph-1 lg:w-[505px]">
                        Pellentesque etiam blandit in tincidunt at donec. Eget
                        ipsum dignissim placerat nisi, adipiscing mauris non
                        purus parturient.
                    </p>
                </div>
                <div className="lg:flex justify-between mt-12">
                    {Benefits.map((item, i) => (
                        <BenefitsCard
                            key={i}
                            img={item.img}
                            name={item.name}
                            desc={item.desc}
                        />
                    ))}
                </div>
            </div>
        )
    }

    const renderProduct = () => {
        return (
            <div className="lg:mt-44 mt:24">
                <div className="container mx-auto relative">
                    <div className="flex flex-col gap-3 lg:mb-7 mb-4 mx-auto lg:w-[440px] h-[94px] items-center">
                        <p className="text-secondary-1">Product</p>
                        <h2 className="heading">Our Popular Product</h2>
                    </div>
                    <div className="w-full ">
                        <p className="text-paragraph-1 text-center lg:w-[656px] mx-auto">
                            Pellentesque etiam blandit in tincidunt at donec.
                            Eget ipsum dignissim placerat nisi, adipiscing
                            mauris non purus parturient.
                        </p>
                    </div>
                </div>
                <ProductSlick />
            </div>
        )
    }

    const renderOurProduct = () => {
        return (
            <div className="container mx-auto mt-[180px] px-4 lg:px-0">
                <div className="lg:flex justify-between">
                    <div>
                        <div className="lg:w-[511px] h-[151px] ">
                            <h5 className="text-secondary-1 mb-3">
                                Our Products
                            </h5>
                            <h2 className="heading font-bold">
                                Crafted by talented and high quality material
                            </h2>
                        </div>
                        <div className="lg:w-[580px] h-[96px] my-12">
                            <p className="text-paragraph-1">
                                Pellentesque etiam blandit in tincidunt at
                                donec. Eget ipsum dignissim placerat nisi,
                                adipiscing mauris non purus parturient. morbi
                                fermentum, vivamus et accumsan dui tincidunt
                                pulvinar
                            </p>
                        </div>
                        <PrimaryButton text="Learn More" />
                        <div className="mt-12">
                            <Image src={ourProduct1} alt={'product1'} />
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-12 lg:mt-12 mt-8 justify-end">
                            <CountingDesc
                                total={20}
                                prefix="+"
                                desc="Years Experience"
                            />
                            <CountingDesc total={483} desc="Happy Client" />
                            <CountingDesc
                                total={150}
                                prefix="+"
                                desc="Project Finished"
                            />
                        </div>
                        <div className="mt-[58px]">
                            <Image src={ourProduct2} alt={'product2'} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const renderTestimonial = () => {
        return (
            <div className="container mt-44">
                <div className="mb-7 text-center">
                    <h5 className="text-secondary-1">Testimonials</h5>
                    <h2 className="heading font-bold">What our customer say</h2>
                </div>
                <div className="w-[656px] h-[54px] mx-auto">
                    <p className="text-center text-paragraph-1">
                        Pellentesque etiam blandit in tincidunt at donec. Eget
                        ipsum dignissim placerat nisi, adipiscing mauris non
                        purus parturient.
                    </p>
                </div>
                <TestimoniSlick />
            </div>
        )
    }

    const renderArticles = () => {
        return (
            <div className="container mx-auto">
                <p className="text-secondary-1">Articles</p>
                <div className="flex flex-row justify-between">
                    <div className="w-1/2">
                        <div className="w-[544px] h-[151px]">
                            <h2 className="heading font-bold">
                                The best furniture comes from Lalasia
                            </h2>
                            <p className="mt-7 mb-12 text-paragraph-1">
                                Pellentesque etiam blandit in tincidunt at
                                donec.
                            </p>
                        </div>
                    </div>

                    <div className="w-1/2">
                        <div>
                            {articles.map((item, i) => (
                                <ArticleCard
                                    key={i}
                                    img={item.img}
                                    category={item.category}
                                    title={item.title}
                                    prefix={item.prefix}
                                    iconProfil={item.iconProfil}
                                    name={item.name}
                                    date={item.date}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Layout>
            {renderBanner()}
            {renderBenefit()}
            {renderProduct()}
            {renderOurProduct()}
            {renderTestimonial()}
            {renderArticles()}
        </Layout>
    )
}
