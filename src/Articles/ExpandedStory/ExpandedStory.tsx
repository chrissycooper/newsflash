import React from "react";
import './ExpandedStory.css';
import { convertDate } from "../Story/Story";
import { Details } from "../../interfaces";
import NotFound from "../../NotFound/NotFound";

interface ExpandedStoryProps {
  id: string;
  articles: Details[]
}

const ExpandedStory = ({id, articles}:ExpandedStoryProps) => {
  const details = articles.find(article => id === article.publishedAt)
  
  if(details) {
    const {source, author, title, urlToImage, content, publishedAt, url} = details
    const date: string = convertDate(publishedAt)

    return (
      <main className="exp-story">
        <h2>{title}</h2>
        <img src={urlToImage} alt="" className="full-image"/>
        <h3>by {author ? author : "unknown" } via {source.name}</h3>
        <p>date: {date}</p>
        <p>{content}</p>
        <a href={url} target="blank">Read More at {source.name}</a>
      </main>
    )
  }

  return (
    <main className="exp-story">
      <NotFound />
    </main>
  )


}

export default ExpandedStory;
