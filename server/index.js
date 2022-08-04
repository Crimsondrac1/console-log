const { ApolloServer } = require('apollo-server');
const connectToDB = require('./connect');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
// const { PORT } = require('./utils/config');
const PORT = process.env.PORT || 4000
connectToDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

server.listen( PORT ).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});