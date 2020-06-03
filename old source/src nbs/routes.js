import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from './components/Layout/layout'
import NewsArticle from './components/Newsarticle/NewsArticle'
import VideoArticle from './components/Videoarticle/videoarticle'
import News from './components/News/news'
import Videos from './components/Videos/videos'

const Routes = () => (
  <Router>
  <Layout>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Home" component={Home} />
    <Route exact path="/News" component={News} />
    <Route exact path="/Video" component={Videos} />
    <Route exact path="/articles/:id" component={NewsArticle} />
    <Route exact path="/videos/:id" component={VideoArticle} />
    </Switch>
    </Layout>
  </Router>
);

export default Routes;

