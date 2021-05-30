import Container from './Container'
import Header from './Header'

const Layout = ({ children }) => (
  <div className="bg-gray-50 overflow-auto">
    <Header />
    <Container className="bg-white p-6 mb-6 rounded-md shadow-sm">
      {children}
    </Container>
  </div>
)

export default Layout
