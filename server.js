const express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();
const schema = require('./schema');
const cors = require('cors');
app.use(cors());
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen('5000', () => {
  console.log('Server Started');
});
