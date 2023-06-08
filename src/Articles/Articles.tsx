import React from "react";
import './Articles.css'
import { Story } from "./Story/Story";
import { Details } from "../interfaces";

interface ArticlesProps {
  articles: Details[];
}

const Articles = ({articles}: ArticlesProps) => {

  const stories = articles.map((article, index) => {
    return <Story details={article} key={article.title} id={article.publishedAt}/>
  })

  return (
    <div className="articles-container">
      {stories}
    </div>
  )
}

export default Articles;
