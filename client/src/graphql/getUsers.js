import { gql } from 'graphql-request'
import client from './client'

export const usersQuery = gql`
  query users($q: String) {
    users(q: $q) {
      id
      name
      email
      cpf
    }
  }
`

export const getUsers = async (q) => {
  const { users } = await client.request(usersQuery, { q })
  return users
}
