import React from "react";
import './Articles.css'
import { Story } from "./Story/Story";
import { Details } from "../interfaces";

interface ArticlesProps {
  articles: Details[];
}

const Articles = ({articles}: ArticlesProps) => {

  const stories = articles.map(article => {
    return <Story details={article} key={article.title}/>
  })

  return (
    <div className="articles-container">
      {stories}
    </div>
  )
}

export default Articles;
