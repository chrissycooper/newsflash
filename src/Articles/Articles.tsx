import React from "react";
import "./Articles.css"
import { Story } from "./Story/Story";
import { Details } from "../utilities/interfaces";
import NotFound from "../NotFound/NotFound";


interface ArticlesProps {
  articles: Details[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Articles = ({articles, searchTerm}: ArticlesProps) => {

  const stories = articles.map((article) => {
    return <Story details={article} key={article.title} id={article.publishedAt}/>
  })

  const searchedStories = articles.filter(article => {
    let title = article.title.toLowerCase()
    return title.includes(searchTerm)
  }).map((article) => {
    return <Story details={article} key={article.title} id={article.publishedAt}/>
  })

  const errorMessage = "No articles were found matching that search term.";

  return (
    <main className="articles-outside">
      <div className="articles-container">
        {searchTerm ? searchedStories : stories}
        {!searchedStories.length && <NotFound error={errorMessage}/>}
      </div>
    </main>
  );
};

export default Articles;
