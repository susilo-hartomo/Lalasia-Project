import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

export default function Article() {
  return <div>asd</div>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: null };
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
