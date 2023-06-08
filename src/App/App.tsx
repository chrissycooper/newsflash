import React, { useState, useEffect } from 'react';
import topHeadlinesSample from './mockdata';
import Articles from '../Articles/Articles';
import './App.css';

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

function App() {
  const [articles, setArticles] = useState<Details[]>([])

  useEffect(() => {
    let articlesData:Details[] = topHeadlinesSample.articles
    setArticles(articlesData)
  }, [])

  useEffect(()=> {
    console.log('second useeffect', articles)
  }, [articles])

  return (
    <div className="App">
      <h1>Welcome to NewsFlash ⚡︎</h1>
      <Articles articles={articles}/>
    </div>
  );
}

export default App;
