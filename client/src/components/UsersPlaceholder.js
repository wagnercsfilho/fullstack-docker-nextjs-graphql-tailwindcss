const UsersPlaceholder = () =>
  Array(5)
    .fill(5)
    .map((idx) => (
      <div key={idx} className="border-b-2 border-gray-100 py-4 w-full">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-200 h-12 w-12" />
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          </div>
        </div>
      </div>
    ))

export default UsersPlaceholder
