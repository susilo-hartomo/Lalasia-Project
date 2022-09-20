import React from "react";
import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { ArticleTypes } from "lib/types";
import Layout from "@/components/Layout";
import { getAllNews, getTwoLatestNews } from "lib/helper/fetchArticle";

const index: NextPage = ({
  twolatestnews,
  allnews,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
