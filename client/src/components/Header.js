import Container from './Container'

const Header = () => (
  <Container>
    <div className="py-6">
      <div className="lg:flex-1">
        <span className="sr-only">Descomplica</span>
        <img
          className="h-8 w-auto sm:h-10"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt=""
        />
      </div>
    </div>
  </Container>
)

export default Header
