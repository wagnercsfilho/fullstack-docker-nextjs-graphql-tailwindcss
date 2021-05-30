import { SearchIcon } from '@heroicons/react/solid'
import { useState, useEffect } from 'react'
import Button from './Button'
import Input from './Input'

const SearchUserForm = ({ onSearch, isLoading }) => {
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    if (searchText.trim() === '') {
      onSearch()
    }
  }, [searchText])

  const onChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(searchText)
  }

  return (
    <form className="mb-6" onSubmit={handleSearch}>
      <div className="text-gray-900 font-medium text-lg mb-2">Find users</div>
      <div className="flex">
        <Input
          placeholder="Search..."
          name="search"
          onChange={onChange}
          value={searchText}
        />
        <Button
          isLoading={isLoading}
          className="ml-2"
          type="submit"
          icon={<SearchIcon className="h-5 w-5 mr-2 text-white" />}
        >
          Search
        </Button>
      </div>
    </form>
  )
}

export default SearchUserForm
