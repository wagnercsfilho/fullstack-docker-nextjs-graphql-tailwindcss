require('dotenv').config()
const { BaseRedisCache } = require('apollo-server-cache-redis');
const responseCachePlugin = require('apollo-server-plugin-response-cache');
const Redis = require('ioredis');
const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const { PORT } = require("./config/constants");
const User = require('./models/user');
const Users = require('./datasources/users');

require("./config/database");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true,
  plugins: [responseCachePlugin()],
  cache: new BaseRedisCache({
    client: new Redis({
      host: 'redis',
    }),
  }),
  dataSources: () => ({
    users: new Users(User)
  })
});

server
  .listen({
    port: PORT,
  })
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
