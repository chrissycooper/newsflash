import React, { useState, useEffect } from 'react';
import topHeadlinesSample from './mockdata';
import Articles from '../Articles/Articles';
import SideBar from '../NavBar/NavBar';
import { Details } from '../interfaces';
import getTopHeadlines from '../apicalls';
import './App.css';

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
    <div className="App">
      <div className='logo-container'>
        <SideBar />
      </div>
      <Articles articles={articles}/>
    </div>
  );
}

export default App;
