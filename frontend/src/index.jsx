import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './theme/GlobalStyles';
import theme from './theme/theme';
import Header from './components/Header';
import Inventory from './components/Inventory';
import Dishes from './components/Dishes';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000',
});

const client = new ApolloClient({
  cache,
  link,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyles />
          <Header />
          <Route path="(/|/inventory)" component={Inventory} />
          <Route exact path="/dishes" component={Dishes} />
        </React.Fragment>
      </ThemeProvider>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
