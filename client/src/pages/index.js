import { useState } from 'react'
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'

import { getUsers } from '../graphql/getUsers'
import Layout from '../components/Layout'
import Users from '../components/Users'
import AlertMessage from '../components/AlertMessage'
import UsersPlaceholder from '../components/UsersPlaceholder'
import SearchUserForm from '../components/SearchUserForm'

export default function Home() {
  const [searchKey, setSearchKey] = useState()

  const { data: users, status } = useQuery(['users', searchKey], () =>
    getUsers(searchKey)
  )

  const onSearch = (searchText) => {
    setSearchKey(searchText)
  }

  const renderContent = () => {
    if (status === 'loading') {
      return <UsersPlaceholder />
    }

    if (!users.length && status !== 'loading') {
      return <AlertMessage text="Nenhum registro encontrado" />
    }

    return <Users users={users} />
  }

  return (
    <Layout>
      <SearchUserForm onSearch={onSearch} isLoading={status === 'loading'} />
      {renderContent()}
    </Layout>
  )
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['users', null], () => getUsers(null))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
