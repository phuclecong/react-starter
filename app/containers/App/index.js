/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from 'containers/HomePage/Loadable';
import About from 'containers/About/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Container from '@material-ui/core/Container';

import './index.scss';

export default function App() {
  return (
    <React.Fragment>
      <Helmet titleTemplate="%s - React Starter" defaultTitle="React Starter">
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </React.Fragment>
  );
}
