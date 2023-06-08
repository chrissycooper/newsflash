import React from "react";
import './Story.css';

interface StoryProps {
  details: {
    source: object, 
    author: string | null,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
  }
}

const Story = ({details}:StoryProps) => {
  const {source, author} = details
  return (
    <div className="story">
      <h2>Title</h2>
    </div>
  )
}

export default Story;
