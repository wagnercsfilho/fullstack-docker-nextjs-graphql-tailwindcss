import classnames from 'classnames'

const Input = ({ onChange, className, value, name, placeholder }) => (
  <input
    className={classnames(
      'shadow appearance-none border rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none',
      className
    )}
    type="text"
    placeholder={placeholder}
    name={name}
    onChange={onChange}
    value={value}
  />
)

export default Input
