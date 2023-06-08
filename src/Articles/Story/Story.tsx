import React from "react";
import './Story.css';
import { Details } from "../../interfaces";
import { Link } from "react-router-dom";

interface StoryProps {
  details: Details;
  id: string;
}

const convertDate = (published:string) => {
  let date = published.slice(5, 10)
  let year = published.slice(0, 4)
  date = date.replace('-', '/') + '/' + year
  return date
}

const Story = ({details}:StoryProps) => {
  const { author, title, urlToImage, description, publishedAt } = details
  
  
  const date: string = convertDate(publishedAt)
  
  return (
    <div className="story">
      <h2>{title}</h2>
      <img src={urlToImage} alt="" className="tile-image"/>
      <h3>by {author ? author : "unknown" }</h3>
      <p>date: {date}</p>
      <p>{description?.slice(0, 150)}{"..."}</p>
      <Link to={`/${publishedAt}`}>Read More</Link>
    </div>
  )
}

export  {Story, convertDate};
