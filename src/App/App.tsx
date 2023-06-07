import React, { useState, useEffect } from 'react';
import topHeadlinesSample from '../mockdata';
import Articles from '../Articles/Articles';
import './App.css';

function App() {
  const [articles, setArticles] = useState<object[]>([])

  useEffect(() => {
    let articlesData:object[] = topHeadlinesSample.articles
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
