const Users = ({ users }) => (
  <ul className="divide-y divide-gray-100">
    {users.map((user) => (
      <li key={user.id} className="py-4 flex">
        <img
          className="h-10 w-10 rounded-full"
          src="https://via.placeholder.com/50"
          alt=""
        />
        <div className="ml-3">
          <p className="text-sm font-bold text-gray-900">{user.name}</p>
          <p className="text-sm text-gray-900">{user.email}</p>
          <p className="text-sm text-gray-500">
            ID:
            {user.cpf}
          </p>
        </div>
      </li>
    ))}
  </ul>
)

export default Users
