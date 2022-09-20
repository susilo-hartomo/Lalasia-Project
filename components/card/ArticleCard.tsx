import React from "react";
import { ArticleTypes } from "lib/types";

export default function ArticleCard(article: ArticleTypes) {
  return (
    <div>
      <div>{article.title}</div>
      <div>{article.author}</div>
      <div>{article.avatar}</div>
      <div>{article.category}</div>
      <div>{article.date}</div>
      <div>{article.summary}</div>
      <div>{article.thumbnail}</div>
    </div>
  );
}
