import React, { useState, useEffect } from 'react';
import topHeadlinesSample from './mockdata';
import Articles from '../Articles/Articles';
import NavBar from '../NavBar/NavBar';
import { Details } from '../interfaces';
import getTopHeadlines from '../apicalls';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ExpandedStory from '../Articles/ExpandedStory/ExpandedStory';

function App() {
  const [articles, setArticles] = useState<Details[]>([])

  useEffect(() => {
    let articlesData:Details[] = topHeadlinesSample.articles
    // getTopHeadlines()
    // .then(data => {
    //   console.log(data)
    //   setArticles(data.articles)
    // })
    setArticles(articlesData)
  }, [])

  return (
    <Switch>
        <div className="App">
      <Route exact path="/">
          <div className='logo-container'>
            <NavBar />
          </div>
          <Articles articles={articles}/>
      </Route>
      <Route path="/:id" render={({match}) => {
          return <ExpandedStory id={match.params.id} articles={articles} />}}/>
        </div>
    </Switch>
  );
}

export default App;
