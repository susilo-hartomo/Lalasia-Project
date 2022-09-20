import React from "react";
import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { ArticleTypes } from "lib/types";
import Layout from "@/components/Layout";
import { getAllNews, getTwoLatestNews } from "lib/helper/fetchArticle";

interface props {
  twolatestnews: ArticleTypes[];
  allnews: ArticleTypes[];
}

const index: NextPage<props> = ({ twolatestnews, allnews }) => {
  // const twolatestnewss = JSON.parse(twolatestnews);

  return (
    <Layout title={"article"} content={"asdas"}>
      <h1>Article</h1>
      <h2>
        We display product based on latest products we have, if you want to see
        old products please enter the name of the item
      </h2>

      {/* <Carousel /> */}
      {/* <TrendingTopics */}
      <h5 style={{ fontWeight: "bold" }}>Trending Topics Latest News</h5>
      {twolatestnews.map((item, i) => {
        return (
          <div>
            <div>{item.title}</div>
            <div>{item.author}</div>
          </div>
        );
      })}

      <h5 style={{ fontWeight: "bold" }}>All News</h5>
      {allnews.map((item, i) => {
        return (
          <div>
            <div>{item.title}</div>
            <div>{item.author}</div>
          </div>
        );
      })}

      {/* <NewsLetter /> */}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const twolatestnews: ArticleTypes[] = await getTwoLatestNews();
  const allnews: ArticleTypes[] = await getAllNews();

  return {
    props: {
      twolatestnews,
      allnews,
    },
  };
};

export default index;
