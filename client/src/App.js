import React from 'react';
// Components
import Navbar from './Navbar';
import Launches from './GraphQl/Launches';
import Launch from './GraphQl/Launch';
// Apollo
import { ApolloProvider } from '@apollo/react-hooks';
import client from './Client';
import { from } from 'apollo-boost';
// React-Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <div className=" my-5 container">
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
