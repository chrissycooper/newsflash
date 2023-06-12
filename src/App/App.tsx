import React, { useState, useEffect } from "react";
import topHeadlinesSample from "./mockdata";
import Articles from "../Articles/Articles";
import NavBar from "../NavBar/NavBar";
import NotFound from "../NotFound/NotFound";
import { Details } from "../utilities/interfaces";
import getTopHeadlines from "../utilities/apicalls";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import ExpandedStory from "../Articles/ExpandedStory/ExpandedStory";

function App() {
  const [articles, setArticles] = useState<Details[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("")

  useEffect(() => {
    getTopHeadlines()
    .then(data => {
      setArticles(data.articles)
    })
    .catch(err => setError(err.message))
    // let articlesData:Details[] = topHeadlinesSample.articles
    // setArticles(articlesData)
  }, [])

  return (
    <>
      <NavBar setSearchTerm={setSearchTerm}/>
      {error ? <NotFound error={error}/> : 
        <Switch>
          <Route exact path="/">
              <Articles articles={articles} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          </Route>
          <Route path="/:id" render={({match}) => {
              return <ExpandedStory id={match.params.id} articles={articles} />}}
          />
          <Route path="/not-found">
                <NotFound />
            </Route>
          <Route path="/*">
              <Redirect to={"/not-found"}/>
            </Route>
        </Switch>
      }
    </>
  );
};

export default App;
