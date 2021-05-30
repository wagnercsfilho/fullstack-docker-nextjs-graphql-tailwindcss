import classnames from 'classnames'

const Container = ({ children, className }) => (
  <div className={classnames('max-w-2xl md:mx-auto mx-6', className)}>
    {children}
  </div>
)

export default Container
