import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(
  process.env.API_URL || process.env.PUBLIC_API_URL
)

export default client
