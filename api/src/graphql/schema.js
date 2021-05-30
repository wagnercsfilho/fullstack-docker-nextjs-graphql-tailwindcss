const { gql } = require("apollo-server-core");

const typeDefs = gql`
  type User {
    id: ID!
    name: String
    email: String
    cpf: String
  }

  type Query {
    users(q: String): [User]
  }
`;

module.exports = typeDefs;
