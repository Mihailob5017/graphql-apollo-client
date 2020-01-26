import React, { useEffect } from 'react';
// Components
import Navbar from './Navbar';
import Launches from './GraphQl/Launches';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './Client';
const App = () => {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <div className=" my-5 container">
        <Launches />
      </div>
    </ApolloProvider>
  );
};

export default App;
