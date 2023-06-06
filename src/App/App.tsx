import React, { useState, useEffect } from 'react';
import topHeadlinesSample from '../mockdata';
import './App.css';

function App() {
  const [articles, setArticles] = useState({})

  useEffect(() => {
    setArticles(topHeadlinesSample)
  }, [])

  useEffect(()=> {
    console.log('second useeffect', articles)
  }, [articles])

  return (
    <div className="App">
      <h1>Welcome to NewsFlash ⚡︎</h1>
    </div>
  );
}

export default App;
