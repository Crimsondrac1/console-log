const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server');
const connectToDB = require('./connect');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
// const { PORT } = require('./utils/config');
const app = express();
const PORT = process.env.PORT || 4000
connectToDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

server.listen( PORT ).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
