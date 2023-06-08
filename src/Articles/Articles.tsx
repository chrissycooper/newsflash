import React from "react";
import './Articles.css'
import { Story } from "./Story/Story";
import { Details } from "../interfaces";
import SearchBar from "../SearchBar/SearchBar";

interface ArticlesProps {
  articles: Details[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Articles = ({articles, setSearchTerm, searchTerm}: ArticlesProps) => {

  const stories = articles.map((article) => {
    return <Story details={article} key={article.title} id={article.publishedAt}/>
  })

  const searchedStories = articles.filter(article => {
    let title = article.title.toLowerCase()
    return title.includes(searchTerm)
  }).map((article) => {
    return <Story details={article} key={article.title} id={article.publishedAt}/>
  })
  console.log(searchedStories)

  return (
    <main className="articles-outside">
      {/* <SearchBar setSearchTerm={setSearchTerm}/> */}
      <div className="articles-container">
        {searchTerm ? searchedStories : stories}
      </div>
    </main>
  )
}

export default Articles;
