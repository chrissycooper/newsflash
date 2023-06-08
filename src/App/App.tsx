import React, { useState, useEffect } from 'react';
import topHeadlinesSample from './mockdata';
import Articles from '../Articles/Articles';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';
import { Details } from '../interfaces';
import getTopHeadlines from '../apicalls';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ExpandedStory from '../Articles/ExpandedStory/ExpandedStory';

function App() {
  const [articles, setArticles] = useState<Details[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // getTopHeadlines()
    // .then(data => {
    //   console.log(data)
    //   setArticles(data.articles)
    // })
    let articlesData:Details[] = topHeadlinesSample.articles
    setArticles(articlesData)
  }, [])

  return (
    <>
      <NavBar setSearchTerm={setSearchTerm}/>
      <Switch>
          <div className="App">
        <Route exact path="/">
            {/* <SearchBar setSearchTerm={setSearchTerm}/> */}
            <Articles articles={articles} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </Route>
        <Route path="/:id" render={({match}) => {
            return <ExpandedStory id={match.params.id} articles={articles} />}}/>
          </div>
      </Switch>
    
    </>
  );
}

export default App;
