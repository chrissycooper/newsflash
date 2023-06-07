import React from "react";
import './Articles.css'
import Story from "./Story/Story";

interface Details {
    source: object, 
    author: string | null,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}

interface ArticlesProps {
  articles: Details[];
}

const Articles = ({articles}: ArticlesProps) => {

  const stories = articles.map(article => {
    return <Story details={article} />
  })

  return (
    <div className="articles-container">
      {stories}
    </div>
  )
}

export default Articles;
